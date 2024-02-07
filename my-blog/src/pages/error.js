import { useState } from "react";
import { Header } from "../components/Header";
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <>
      <div className="container max-w-7xl mx-auto m-4">
        <div className="container mx-auto m-4">
          <Header />
        </div>
      </div>
      <div>
        {" "}
        <ul>
          {posts.map((post) => (
            <Link>
              {post.id}. {post.title}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
