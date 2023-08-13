import React, { ChangeEvent, FormEvent, useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { usePostSignedInMutation } from "redux/actions/services";
export interface ISignin {
  data: {
    email: string;
    password: string;
  };
  url: string;
}
const SignIn: React.FC = () => {
  const [adminInfo, setAdminInfo] = useState({ email: "", password: "" });
  const [status, setStatus] = useState("");
  const [postSignedInMutation, { error, isLoading }] =
    usePostSignedInMutation();
  const navigate = useNavigate();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAdminInfo({ ...adminInfo, [name]: value });
  };
  const payload: ISignin = {
    data: { email: adminInfo.email, password: adminInfo.password },
    url: "auth/login",
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postSignedInMutation(payload)
      .unwrap()
      .then((res) => {
        if (res.token) {
          sessionStorage.setItem("token", res.token);
          message.success(res.message);
          setStatus(res.message);
          navigate("/");
        }
      })
      .catch((error) => {
        setStatus("error");
        // console.log("Error occurred:", error);
      });
  };
  return (
    <div className="w-full h-[100vh] mx-auto p-3 bg-gallery">
      <div className="w-full max-w-[800px] mt-[5rem] mx-auto">
        <div className="w-[70%] mx-auto mb-5 text-center">
          <h2 className="font-bold text-[1.5rem]">Welcome back Poise Admin</h2>
          <p>kindly fill in the details to sign in</p>
        </div>
        <form
          className="w-full max-w-[400px] sm:w-[70%] mx-auto p-3 rounded-md border-[1px] border-button"
          onSubmit={submitHandler}
        >
          <div className="w-full my-8 sm:flex justify-between">
            <label htmlFor="email" className="basis-[15%]">
              Email:
            </label>
            <input
              type="email"
              name="email"
              placeholder="enter email address"
              className="block w-full sm:basis-[80%] bg-transparent text-center border-b-[1px] border-button focus:outline-none focus:bg-transparent"
              min="4"
              required
              onChange={changeHandler}
            />
          </div>
          <div className="w-full my-8 sm:flex justify-between">
            <label htmlFor="password" className="basis-[15%]">
              Password:
            </label>
            <input
              type="password"
              name="password"
              placeholder="enter password"
              className="block w-full sm:basis-[80%] bg-transparent text-center border-b-[1px] border-button focus:outline-none focus:bg-transparent"
              minLength={4}
              required
              onChange={changeHandler}
            />
          </div>
          {status === "error" && (
            <p className="w-full text-red-500 text-sm">
              Invalid username or password
            </p>
          )}
          <button className="w-full my-8 bg-button p-2 rounded-md hover:bg-button_hover hover:text-white md:p-3">
            sign in
          </button>
          <button
            className="w-full p-2 rounded-md underline md:p-3"
            onClick={() => navigate("/signup")}
          >
            create
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
