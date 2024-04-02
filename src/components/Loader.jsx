import { Html } from "@react-three/drei";
import React from "react";

export const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="w-[100vh] h-[10vh] rounded-full">Loading...</div>
      </div>
    </Html>
  );
};
