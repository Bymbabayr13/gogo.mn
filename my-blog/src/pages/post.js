import { useEffect, useState } from "react";
import { Header } from "../components/Header";

export default function Home() {
  return <Timer seconds={10} />;
}

const Timer = ({ seconds }) => {
  const [time, setTime] = useState(seconds);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (time === 0) return;
    if (isPaused) return;
    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time, isPaused]);
  console.log(isPaused);
  return (
    <>
      <div className="container max-w-7xl mx-auto m-4">
        <div className="container mx-auto m-4">
          <Header />
        </div>
      </div>
      <div>
        <p>time: {time}</p>
        <button onClick={() => setIsPaused(true)} className="bg-green-700 m-4">
          pause
        </button>
        <button onClick={() => setIsPaused(false)} className="bg-green-700 m-4">
          continue
        </button>
        <button onClick={() => setTime(seconds)} className="bg-green-700 m-4">
          reset
        </button>
      </div>
    </>
  );
};
