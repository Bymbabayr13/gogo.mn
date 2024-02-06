import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Head from "next/head";
export default function home({ details }) {
  return (
    <>
      <div className="container max-w-7xl mx-auto  p-5">
        <Head>
          <meta property="og:title" content={details.title} />
          <meta property="og:image" content={details.cover_image} />
        </Head>

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

export async function getServerSideProps({ query }) {
  const res = await fetch(
    `https://dev.to/api/articles/${query.connect}/${query.slug}`
  );
  const details = await res.json();
  return { props: { details } };
}
