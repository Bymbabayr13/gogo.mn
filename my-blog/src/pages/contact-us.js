import { Header } from "../components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="container max-w-7xl mx-auto m-4">
        <div className="container mx-auto m-4">
          <Header />
          <div className="p-20">
            <p className="text-5xl font-bold my-4">Contact-us</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <div className="grid grid-cols-2 gap-6 my-4">
              <div className="border rounded p-4">
                <p className="font-bold text-2xl">Address</p>
                <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
              </div>
              <div className="border rounded p-4">
                <p className="font-bold text-2xl">Address</p>
                <p>313-332-8662 info@email.com</p>
              </div>
            </div>
            <div className="bg-slate-300 p-4">
              <p className="font-bold text-xl">Leave message</p>
              <div className="grid grid-cols-2 gap-2    my-8">
                <input
                  className="rounded"
                  type="text"
                  placeholder="  your name"
                />
                <input
                  className="rounded"
                  type="text"
                  placeholder="  your email"
                />
              </div>
              <div className="grid grid-cols-1">
                <input
                  className="rounded"
                  type="text"
                  placeholder="  subject"
                />
              </div>
              <div className="grid grid-cols-1 my-6">
                <textarea
                  className="h-24 rounded"
                  placeholder="Write a message"
                ></textarea>
              </div>
              <button className="rounded-md bg-blue-500 p-4">
                Send message{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
}
