import { Menub } from "./icon/Menub";
import { IoIosClose } from "react-icons/io";
import { Menudata } from "./data/Menudata";
import { useState } from "react";
import { Logo } from "./icon/Logo";
export function Phonemenu() {
  const [visible, setVisible] = useState(false);
  function closeBtn() {
    setVisible(false);
  }
  function openBtn() {
    setVisible(true);
  }

  return (
    <>
      <div onClick={openBtn}>
        <Menub />
      </div>
      <div
        className={`fixed w-full top-0 bottom-0 z-10 transition-all  bg-white p-6  -right-full ${
          visible ? "right-0" : "-right-full"
        }
       `}
      >
        <div className="flex justify-between   ">
          <a href="/">
            {" "}
            <Logo />{" "}
          </a>
          <div className="" onClick={closeBtn}>
            <IoIosClose style={{ fontSize: "40px" }} />
          </div>
        </div>
        <div onClick={closeBtn}>
          <Menulist data={Menudata} />
        </div>
      </div>
    </>
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
