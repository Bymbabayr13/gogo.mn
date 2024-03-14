import { Vector } from "@/components/icons/Vector";
import axios from "axios";
import { useState } from "react";

export default function sign_up() {
  const [newemail, setNewemail] = useState();
  const [newpass, setNewpass] = useState();
  const [name, setName] = useState();
  async function signUpBtn() {
    await axios
      .post("http://localhost:4000/Users", { name, newemail, newpass })
      .then(() => {
        alert("succes");
        window.location = "/confirmation";
      })
      .catch((e) => console.log(e));
  }

  return (
    <div className="grid grid-cols-2 h-screen bg-white">
      <div className="  flex justify-center items-center p-4">
        <div className="text-black">
          <div className="flex gap-2 mb-14  justify-center items-center">
            <Vector /> <p>Geld</p>
          </div>
          <h1 className="text-center text-black">Welcome Back</h1>
          <p className="mb-8">Welcome back, Please enter your details</p>

          <input
            onChange={(e) => setName(e.target.value)}
            className="input p-0 bg-slate-300 w-full mb-2 text-black block"
            placeholder="Name"
          ></input>
          <input
            onChange={(e) => setNewemail(e.target.value)}
            className="input p-0 bg-slate-300 w-full  text-black block"
            placeholder="Email"
          ></input>
          <input
            type="password"
            onChange={(e) => setNewpass(e.target.value)}
            className="input p-0  w-full bg-slate-300 block my-3"
            placeholder="Password"
          ></input>
          <button onClick={signUpBtn} className="btn w-full">
            Sign up
          </button>
          <div className="flex justify-center mt-10">
            <div className="flex gap-2">
              <p>Already have account?</p>
              <a className="hover:text-blue-600" href="/login">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-600"></div>
    </div>
  );
}
