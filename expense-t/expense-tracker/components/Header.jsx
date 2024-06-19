import Link from "next/link";
import { Vector } from "./icons/Vector";
export function Header() {
  const arr = [
    { name: "Dashboard", link: "/" },
    { name: "Records", link: "/records" },
  ];
  return (
    <div className="flex justify-between">
      <div className="flex">
        <Vector />
        {arr.map((item, index) => {
          return (
            <a href={item.link} className="ml-2">
              {item.name}
            </a>
          );
        })}
      </div>
      <div className="flex">
        <div className="btn bg-blue-600 text-white ">+Records</div>
        <img
          src="Profile.jpeg"
          className="w-10 h-10 mt-1 ml-2 rounded-full"
        ></img>
      </div>
    </div>
  );
}
