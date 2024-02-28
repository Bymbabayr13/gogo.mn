import { Header } from "@/components/Header";
import { Showmodal } from "@/components/Showmodal";

export default function () {
  function showModal() {
    const modal = document.getElementById();
  }
  return (
    <div className="container mx-auto m-4">
      <Header />
      <div className="flex mt-5">
        <div className="w-1/4 pr-4 mr-4">
          <h1 className="font-bold text-2xl mb-4">Records</h1>
          <Showmodal />
        </div>
        <div className="w-3/4 pl-4 ml-6">
          <p>new </p>
        </div>
      </div>
    </div>
  );
}
