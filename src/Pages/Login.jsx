import React, { useRef, useState } from "react";
import { Button, Form, Input, notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const formRef = useRef();
  const navigate = useNavigate();

  const openNotificationSuccess = (placement) => {
    api.success({
      message: "Success",
      description: "Login successfuly. Please wait ...",
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

  const setUser = async (email, password) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      openNotificationSuccess("top");
      setTimeout(() => {
        navigate("/home");
      }, 1500);
    } catch (err) {
      openNotificationError("top", err.message);
    }
    setLoading(false);
  };

  const onFinish = async (values) => {
    const email = values.email;
    const password = values.password;
    setUser(email, password);
    formRef.current?.resetFields();
  };

  return (
    <>
      {contextHolder}
      {loading ? <Loader /> : <></>}
      <div className="w-[500px] h-[450px] max-sm:w-[340px] bg-white shadow-xl rounded-2xl flex flex-col gap-4 justify-center p-4 relative">
        <div className="w-full gap-2 flex flex-col p-3 items-center justify-center">
          <h1 className="text-2xl font-bold uppercase">Login</h1>
          <h5 className="text-sm text-center text-gray-400 flex justify-center">
            Login and check your inbox for new messages
          </h5>
        </div>
        <div className="flex justify-center">
          <Form className="w-3/4 flex flex-col gap-4" onFinish={onFinish}>
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
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Login
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

export default Login;
