import React from "react";
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, Upload } from "antd";
import { Link } from "react-router-dom";

const Register = () => {
  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  return (
    <div className="relative w-[500px] max-sm:w-[400px] bg-white shadow-xl rounded-2xl flex flex-col justify-center p-4">
      <div className="w-full gap-2 flex flex-col p-3 items-center justify-center">
        <h1 className="text-2xl uppercase font-bold">Sign Up</h1>
        <h5 className="text-sm text-center text-gray-400  flex justify-center">
          Just sign up and start chatting with your friends
        </h5>
      </div>
      <div className="flex justify-center">
        <Form className="w-3/4 flex flex-col gap-4" onFinish={""}>
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

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="upload"
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" action="" listType="picture">
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
  );
};

export default Register;
