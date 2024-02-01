import Link from "next/link";

export function Storymode({ promps }) {
  return (
    <>
      <Link href={promps.path} className="relative  p-[10px] ">
        <img
          className=" h-80 rounded-md"
          style={{ aspectRatio: "6/4" }}
          src={promps.social_image}
        ></img>
        <div className="absolute left-6 bottom-12">
          {promps.tag_list.map((item) => {
            return (
              <div className="inline-flex text-white px-2 rounded mx-1 bg-blue-700">
                {item}
              </div>
            );
          })}
          <h1 className="text-sm bg-black mt-1 mx-auto text-slate-200 px-2 rounded font-bold">
            {promps.title}
          </h1>
        </div>
      </Link>
    </>
  );
}
