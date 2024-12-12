"use client";

import Card from "../components/Card";
import NavBar from "../components/NavBar";

export default function page() {
  return (
    <>
      <NavBar />
      <div className=" relative flex h-fit flex-col items-center   pt-4">
        <h3 className="font-bold text-2xl border-b-8 text-Text1 border-S-Orange">Choose Plan</h3>
        <h4 className="font-bold text-4xl text-center   text-Text2">Choose Your Plan Type</h4>
        <div className="relative">
          <Card />
        </div>
      </div>
    </>
  );
}
