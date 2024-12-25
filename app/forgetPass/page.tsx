"use client";
import { useState } from "react";
import cardbgimg from "../../public/assets/Resource/bgcardimg.png";
import NavBar from "../components/NavBar";

const content = {
  subtitle: "Trouble logging in?",
  title: "",
  description: "Enter your email and we'll send you a link to get back into your account.",
  elements: [{ type: "email", placeholder: "Email Address", name: "email" }],
};
export default function () {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setSelectedOptions((prev) => ({ ...prev, [field]: value }));
  };
  return (
    <>
      <NavBar />
      <div
        className="w-[98.9vw] min-h-screen flex flex-col items-center justify-center pt-20 p-4"
        style={{
          backgroundImage: `url(${cardbgimg.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="relative container max-w-[32rem]  ">
          <h1 className="text-2xl text-white font-bold mb-4 border-b-8 border-S-Orange leading-none inline-block">{content.subtitle}</h1>
          <p className="mb-6 text-white text-lg">{content.description}</p>

          <div className="flex  flex-col gap-4 ">
            {content.elements.map((element) => (
              <input
                key={element.placeholder}
                type={element.type}
                placeholder={element.placeholder}
                value={selectedOptions[element.name] || ""}
                onChange={(e) => handleInputChange(element.name, e.target.value)}
                className="border-2  bg-transparent text-white placeholder-white rounded-lg p-2 w-full"
              />
            ))}
          </div>
          <div className="mt-2">
            <button className="border-2 border-white rounded-lg  text-white lg:px-20 px-12 py-2">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
