import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function home() {
  const [details, setDetails] = useState();
  const router = useRouter();
  useEffect(() => {
    if (router.query.connect) {
      fetch(
        `https://dev.to/api/articles/${router.query.connect}/${router.query.slug}`
      )
        .then((response) => response.json())
        .then((data) => setDetails(data));
    }
  }, [router.query]);

  console.log({ details });

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
          <img className="p-20" src={details.cover_image}></img>
          <div className="flex justify-start">
            <div className="flex mr-10">
              <img
                className="w-6 h-6 rounded-2xl mr-2"
                src={details.user.profile_image}
              ></img>
              <p>{details.user.name}</p>
            </div>
            <p>{details.readable_publish_date}</p>
          </div>
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
