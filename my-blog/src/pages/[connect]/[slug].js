import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function home() {
  const [details, setDetails] = useState();
  const router = useRouter();
  useEffect(() => {
    fetch(
      `https://dev.to/api/articles/${router.query.connect}/${router.query.slug}`
    )
      .then((Response) => Response.json())
      .then((data) => setDetails(data));
  }, [router.query]);
  if (details === undefined) return null;
  return (
    <>
      <div className="container max-w-7xl mx-auto  p-5">
        <div className="container mx-auto m-4   ">
          <Header />
        </div>
        <div className="flex flex-col items-center mt-10 mx-auto">
          <p className="text-3xl font-bold flex justify-center">
            {details.title}
          </p>
          <div
            className="prose container mx-auto my-7"
            dangerouslySetInnerHTML={{ __html: details.body_html }}
          ></div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
}
