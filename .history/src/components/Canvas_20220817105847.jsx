import React ,{ Suspense} from "react";
import Spline from "@splinetool/react-spline";

export default function Canvas() {
  return (
    <div className="relative w-screen h-screen" id="home">
      <Suspense fallback={
        <div className="flex justify-center items-center text-white">
          Loading elements.
        </div>
      }>
      <Spline scene="https://prod.spline.design/l1f7gvQxWAaKA8Gi/scene.splinecode"
      onMouseDown={e => e.preventDefault()}/>
      </Suspense>
      <div className="absolute bottom-10 w-full justify-center items-center flex">
        <div
          className="shadow-md p-4 flex items-center justify-center
         bg-zinc-900 rounded-3xl"
        >
          <p className="text-zinc-300">Press and drag to orbit</p>
        </div>
      </div>
    </div>
  );
}
