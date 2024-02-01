import { Footer } from "@/components/Footer";
import { Header } from "../components/Header";
import { Home } from "@/components/Home";
export default function index() {
  return (
    <>
      <div className="container max-w-7xl mx-auto m-4">
        <div className="container mx-auto m-4">
          <Header />
          <Home />
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
}
