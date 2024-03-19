import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  type post = {
    black: string;
    title: string;
  };
  type card = {
    name: string;
    title: string;
    posts: post[];
  };

  const card = (props: card) => {
    return (
      <div>
        <h1>{props.name}</h1>
        <h1>{props.title}</h1>
        <h1>{props.posts[1].black}</h1>
        asdfas
      </div>
    );
  };
}
