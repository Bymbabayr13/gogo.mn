import { Logo } from "./icon/Logo";
import { Menudata } from "./data/Menudata";
import Link from "next/link";
import { Search } from "./icon/Search";
import { Phonemenu } from "./Phonemenu";

export function Header() {
  return (
    <div className="flex justify-between">
      <div className="">
        <Logo />
      </div>
      <div className="md:hidden mr-4">
        <Phonemenu />
      </div>
      <div className="md:block hidden">
        <Menu items={Menudata} />
      </div>
      <div className=" hidden md:flex  bg-slate-300 rounded-sm relative">
        <input
          className=" bg-slate-300 rounded-sm"
          placeholder="Search"
        ></input>
        <div className="absolute right-2 top-2 ">
          <Search />
        </div>
      </div>
    </div>
  );
}

function Menu({ items }) {
  return (
    <div className="flex gap-4 text-lg mt-1">
      {items.map((item) => {
        return (
          <Link className="" href={item.link}>
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
