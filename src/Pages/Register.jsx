import React, { useContext, useRef, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload, notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import Loader from "../Pages/Loader";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { AuthContext } from "../Components/Context/AuthContext";

const Register = () => {
  const { currentUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const formRef = useRef();
  const navigate = useNavigate();

  const openNotificationSuccess = (placement) => {
    api.success({
      message: "Success",
      description: "Signed Up successfuly !",
      placement,
    });
  };

  const openNotificationError = (placement, message) => {
    api.error({
      message: "Error",
      description: message,
      placement,
    });
  };

  const setUser = async (email, password, displayName, file) => {
    setLoading(true);
    try {
      setLoading(true);
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (err) => {
          openNotificationError("top", "Error on upload !");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(response.user, {
              displayName: displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", response.user.uid), {
              uid: response.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", response.user.uid), {});
          });
        }
      );
      console.log(response);
      openNotificationSuccess("top");
    } catch (err) {
      openNotificationError("top", err.message);
    }
    setLoading(false);
  };

  const onFinish = async (values) => {
    const email = values.email;
    const password = values.password;
    const displayName = values.username;
    const file = values.upload.file;
    setUser(email, password, displayName, file);
    formRef.current?.resetFields();
  };

  return (
    <>
      {contextHolder}
      {loading ? <Loader /> : <></>}
      <div className="relative w-[500px] max-sm:w-[350px] bg-white shadow-xl rounded-2xl flex flex-col justify-center p-4">
        <div className="w-full gap-2 flex flex-col p-3 items-center justify-center">
          <h1 className="text-2xl uppercase font-bold">Sign Up</h1>
          <h5 className="text-sm text-center text-gray-400  flex justify-center">
            Just sign up and start chatting with your friends
          </h5>
        </div>
        <div className="flex justify-center">
          <Form
            ref={formRef}
            className="w-3/4 flex flex-col"
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              label="Username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>
            <Form.Item
              className="frm-item"
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
                {
                  type: "email",
                  message: "Please enter a valid email address!",
                },
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
                {
                  min: 6,
                  message: "Password should be more than 6 chars!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="upload"
              label="Profile Photo"
              rules={[
                {
                  required: true,
                  message: "Please select a profile photo!",
                },
              ]}
            >
              <Upload maxCount={1} name="profile" beforeUpload={() => false}>
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Sign up
              </Button>
            </Form.Item>
          </Form>
        </div>
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#703eff"
            className="w-10 h-10 absolute top-4"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default Register;
