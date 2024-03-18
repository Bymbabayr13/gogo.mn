
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  interface Point {
    x: number;
    y: number;
  }
   
  function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
  }
   
  // logs "12, 26"
  const point = { x: 12, y: 26 };
  logPoint(point);
  return (
<div>{point.x}</div>
  );

}
