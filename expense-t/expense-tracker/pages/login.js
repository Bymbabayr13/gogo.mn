import { Vector } from "@/components/icons/Vector";
export default function login() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className=" flex justify-center items-center">
          <div>
            <div className="flex gap-2 mb-28  justify-center items-center">
              <Vector /> <p>Geld</p>
            </div>
            <h1 className="text-center">Welcome Back</h1>
            <p>Welcome back, Please enter your details</p>
            <input className="input p-0 w-" placeholder="Email"></input>
            <input className="input p-0" placeholder="Password"></input>
          </div>
        </div>

        <div className="bg-blue-500"></div>
      </div>
    </div>
  );
}
