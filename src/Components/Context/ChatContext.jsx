import { createContext, useContext, useReducer } from "react";
import { AuthContext } from "./AuthContext";

export const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  const INITIAL_STATE = {
    chatID: "null",
    user: {},
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatID:
            currentUser?.uid > action.payload.uid
              ? currentUser.uid + action.payload.uid
              : action.payload.uid + currentUser.uid,
        };
      case "RESET_INITIAL_STATE":
        return INITIAL_STATE;
      default:
        state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);
  const resetInitialState = () => {
    dispatch({ type: "RESET_INITIAL_STATE" });
  };
  return (
    <ChatContext.Provider value={{ data: state, dispatch, resetInitialState }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
