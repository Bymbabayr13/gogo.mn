import { Vector } from "./icons/Vector";
import { FaArrowCircleUp } from "react-icons/fa";
export function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-8 my-6">
      <div className="card bg-blue-700 p-8 text-white ">
        <div className="flex gap-2 mb-28">
          <Vector /> <p>Geld</p>
        </div>
        <div>
          <p>Cash</p>
          <p className="font-bold">10,000,000</p>
        </div>
      </div>
      <div className="card border">
        <div className="flex justify-center py-2">
          <div className="bg-green-600 w-2 h-2 rounded-full mt-2 mr-1"></div>
          <p>Your income</p>
        </div>
        <div className="h-[1px] bg-white"></div>
        <div className="pl-6">
          <h1 className="font-bold text-4xl mt-6 mb-4">1,200,000 ₮</h1>
          <div>Your income amout</div>
          <div className="flex">
            <FaArrowCircleUp color="green" className="mt-1 mr-1" />
            <p>32% from last month</p>
          </div>
        </div>
      </div>
      <div className="card border">
        <div className="flex justify-center">
          <div className="bg-blue-600 w-2 h-2 rounded-full mt-2 mr-1"></div>
          <p>Total expenses</p>
        </div>
      </div>
    </div>
  );
}
