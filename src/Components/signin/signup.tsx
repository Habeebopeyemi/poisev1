import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostSignedUpMutation } from "redux/actions/services";

export interface ISignup {
  email: string;
  password: string;
  adminname: string;
}

const SignUp: React.FC = () => {
  const [adminInfo, setAdminInfo] = useState({
    email: "",
    password: "",
    adminname: "",
  });
  const [status, setStatus] = useState("");
  const [postSignedUpMutation, { error, isLoading }] =
    usePostSignedUpMutation();
  const navigate = useNavigate();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAdminInfo({ ...adminInfo, [name]: value });
  };

  const payload: ISignup = {
    email: adminInfo.email,
    password: adminInfo.password,
    adminname: adminInfo.adminname,
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postSignedUpMutation(payload)
      .unwrap()
      .then((res) => {
        if (res.message) {
          setStatus(res.message);
          //   sessionStorage.setItem("token", "logged-in");
          navigate("/signin");
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
          <h2 className="font-bold text-[1.5rem]">
            Create a new Administrator
          </h2>
          <p>kindly fill in the details to create a new admin</p>
        </div>
        <form
          className="w-[70%] mx-auto p-3 rounded-md border-[1px] border-button"
          onSubmit={submitHandler}
        >
          <div className="w-full my-8 flex justify-between">
            <label htmlFor="email" className="basis-[15%]">
              Email:
            </label>
            <input
              type="email"
              name="email"
              placeholder="enter email address"
              className="basis-[80%] bg-transparent text-center border-b-[1px] border-button focus:outline-none focus:bg-transparent"
              min="4"
              required
              onChange={changeHandler}
            />
          </div>
          <div className="w-full my-8 flex justify-between">
            <label htmlFor="password" className="basis-[15%]">
              Password:
            </label>
            <input
              type="password"
              name="password"
              placeholder="enter password"
              className="basis-[80%] bg-transparent text-center border-b-[1px] border-button focus:outline-none focus:bg-transparent"
              minLength={4}
              required
              onChange={changeHandler}
            />
          </div>
          <div className="w-full my-8 flex justify-between">
            <label htmlFor="password" className="basis-[15%]">
              Name:
            </label>
            <input
              type="text"
              name="adminname"
              placeholder="enter admin name"
              className="basis-[80%] bg-transparent text-center border-b-[1px] border-button focus:outline-none focus:bg-transparent"
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
            create
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;