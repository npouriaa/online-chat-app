import { useContext, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { notification } from "antd";
import "../loader.css";
import { AuthContext } from "./Context/AuthContext";

const SearchBar = () => {
  const { currentUser } = useContext(AuthContext);
  const [username, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [api, contextHolder] = notification.useNotification();

  const openNotificationError = (placement, message) => {
    api.error({
      message: "Error",
      description: message,
      placement,
    });
  };

  const getSerachedUser = async () => {
    setLoading(true);
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapShot = await getDocs(q);
      querySnapShot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      console.log(err);
      openNotificationError("top", err.message);
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getSerachedUser();
  };

  const handleSelect = async () => {
    // Check whether the group (chats in Firestore) exists, if not create
    const mixedID =
      currentUser?.uid > user?.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const docRef = doc(db, "chats", mixedID);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        // Create a chat in the chats collection
        await setDoc(docRef, { messages: [] });

        // Update user chats for currentUser
        const currentUserChatsRef = doc(db, "userChats", currentUser.uid);
        await updateDoc(currentUserChatsRef, {
          [mixedID]: {
            userInfo: {
              uid: user.uid,
              displayName: user.displayName,
              photoURL: user.photoURL,
            },
            date: serverTimestamp(),
          },
        });

        // Update user chats for user
        const userChatsRef = doc(db, "userChats", user.uid);
        await updateDoc(userChatsRef, {
          [mixedID]: {
            userInfo: {
              uid: currentUser.uid,
              displayName: currentUser.displayName,
              photoURL: currentUser.photoURL,
            },
            date: serverTimestamp(),
          },
        });
      }
    } catch (err) {
      console.log(err);
    }
    setUser(null);
    setUserName("");
  };

  return (
    <div className="w-full mt-2 flex flex-col gap-3">
      {contextHolder}
      <form
        onSubmit={(e) => handleSearch(e)}
        className="w-full  h-14 bg-white rounded-2xl flex items-center p-4 gap-2"
      >
        {loading ? (
          <div className="w-10  h-full">
            <span class="second-loader"></span>
          </div>
        ) : (
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#a2a0a0"
              class="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
        <input
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Search in messages ..."
          type="text"
          className="text-sm outline-none w-full"
        />
      </form>
      {user ? (
        <div
          onClick={() => handleSelect()}
          className="cursor-pointer w-full bg-white h-14 gap-2 flex items-center px-2 rounded-2xl"
        >
          <img className="rounded-full h-10 " src={user.photoURL} alt="" />
          <div className="h-full py-2 w-3/4 justify-around flex flex-col ">
            <p className="text-start text-xs font-bold truncate">
              {user.displayName}
            </p>
            <p className="text-start text-xs text-gray-500 truncate">
              Hi, im using this app too ...
            </p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchBar;
