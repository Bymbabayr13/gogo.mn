import { Vector } from "@/components/icons/Vector";
import { useState } from "react";

export default function login() {
  const [email , setEmail] = useState()
  const [pass , setPass] = useState()
  console.log(pass , email) 
  return (
      <div className="grid grid-cols-2 h-full bg-white">
        <div className="  flex justify-center items-center p-4">
          <div className="text-black">
            <div className="flex gap-2 mb-28  justify-center items-center">
              <Vector /> <p>Geld</p>
            </div>
            <h1 className="text-center text-black">Welcome Back</h1>
            <p>Welcome back, Please enter your details</p>
        
           <input onChange={(e)=>setEmail(e.target.value)} className="input p-0 bg-slate-300 w-full  text-black block" placeholder="Email"></input>
            <input type="password" onChange={(e)=>setPass(e.target.value)} className="input p-0  w-full bg-slate-300 block my-3" placeholder="Password"></input>
            <button className="btn w-full">Log in</button>
           
          </div>
        </div>

        <div className="bg-blue-600"></div>
      </div>
    

  );
}
