import { Menub } from "./icon/Menub";
import { IoIosClose } from "react-icons/io";
import { Menudata } from "./data/Menudata";
import Link from "next/link";
export function Phonemenu() {
  return (
    <div className="fixed  inset-0  z-10   p-6">
      <div className="flex justify-between transition-all bottom-0 top-0 -right-full">
        <Menub />
        <div className="">
          <IoIosClose style={{ fontSize: "40px" }} />
        </div>
      </div>
      <Menulist data={Menudata} />
    </div>
  );
}

function Menulist({ data }) {
  return (
    <div className="mt-10">
      {data.map((item) => {
        return (
          <a className="block text-xl m-2 font-serif" href={item.Link}>
            {item.label}
          </a>
        );
      })}
    </div>
  );
}
