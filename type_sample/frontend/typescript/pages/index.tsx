
import { Inter } from "next/font/google";
import { title } from "process";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {


type post ={
  black:string;
  title:string;
}
type card ={
  name :string;
  title:string;
  posts:post[]
}

const  card =(props:card) => {
    const {name , title , posts} = props
    return (
      <div>
      <h1>{title}</h1>
      </div>
        );
}



}
