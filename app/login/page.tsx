"use client";
import { useState } from "react";
import cardbgimg from "../../public/assets/Resource/bgcardimg.png";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const content = {
  subtitle: "Log In",
  title: "",
  description: "",
  elements: [
    { type: "email", placeholder: "Email Address", name: "email" },
    { type: "password", placeholder: "Password", name: "password" },
  ],
};

export default function () {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const router = useRouter();
  const { data: session } = useSession();
  console.log("session", session);
  const handleInputChange = (field: string, value: string) => {
    setSelectedOptions((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email: selectedOptions.email,
      password: selectedOptions.password,
      redirect: false,
    });

    if (result?.error) {
      console.log(Error);
    } else {
      router.push("/");
    }
  };
  return (
    <>
      <div
        className="w-[98.9vw] min-h-screen flex flex-col items-center justify-center pt-20 p-2"
        style={{
          backgroundImage: `url(${cardbgimg.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="relative container max-w-[32rem]  ">
          <h1 className="text-2xl text-white font-bold mb-4 border-b-8 border-S-Orange leading-none inline-block">{content.subtitle}</h1>

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
          <div className="mt-2 text-white flex justify-between">
            <p className="cursor-pointer">
              <Link href="/forgetPass">Forget Password?</Link>
            </p>
            <button className="border-2 border-white rounded-lg  lg:px-20 py-2" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
