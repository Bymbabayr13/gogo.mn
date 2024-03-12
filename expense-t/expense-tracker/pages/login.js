import { Vector } from "@/components/icons/Vector";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function login() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [user, setUser] = useState();

  // useEffect(() => {
  //   fetchUsers();
  // }, []);
  // function fetchUsers() {
  //   fetch("http://localhost:4000/Users")
  //     .then((res) => res.json())
  //     .then((data) => setUser(data))
  //     .then(() => {});
  // }
  async function postIntoLogin() {
    await axios
      .post("http://localhost:4000/Users/login", { email, pass })
      .then(() => {
        alert("success");
        localStorage.setItem("local", `${email}:${pass}`);
        window.location = "/";
      })
      .catch((e) => {
        alert(e.message);
      });
  }

  return (
    <>
      <div className="grid grid-cols-2 h-full bg-white">
        <div className="  flex justify-center items-center p-4">
          <div className="text-black">
            <div className="flex gap-2 mb-28  justify-center items-center">
              <Vector /> <p>Geld</p>
            </div>
            <h1 className="text-center text-black">Welcome Back</h1>
            <p>Welcome back, Please enter your details</p>

            <input
              onChange={(e) => setEmail(e.target.value)}
              className="input p-0 bg-slate-300 w-full  text-black block"
              placeholder="Email"
            ></input>
            <input
              type="password"
              onChange={(e) => setPass(e.target.value)}
              className="input p-0  w-full bg-slate-300 block my-3"
              placeholder="Password"
            ></input>
            <button onClick={postIntoLogin} className="btn w-full mb-10">
              Log in
            </button>
            <div className="flex justify-center">
              <div className="flex gap-2">
                <p>Don’t have account?</p>
                <Link className="hover:text-blue-600" href="/sign_up">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-600"></div>
      </div>
    </>
  );
}
