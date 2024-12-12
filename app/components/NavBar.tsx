"use client";
import Image from "next/image";
import logo2 from "../../public/assets/Resource/logo2.png";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const NavBar: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleSubscribeClick = ():void =>{
    router.push("/mealPlan");
  }

  const toggleSidebar = (): void => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleClick = () => {
    router.push("/");
  };

  return (
    <>
      {/* // main div */}
      <div className=" py-4 px-4 bg-white flex justify-between items-center">
        <div>
          <Image src={logo2} alt="logo" onClick={handleClick} className="w-28 lg:w-32 hover:cursor-pointer" />
        </div>
        {/* //  links */}
        <div className=" hidden lg:flex  items-center">
          <ul className="flex items-center gap-8 font-bold  text-md">
            {["Home", "Try Free for 30-Days", "My Account", "Log In", "About Us"].filter(Boolean).map((item, index) => (
              <li key={index}>
                <Link href={item === "Home" ? "/" : item === "Try Free for 30-Days" ? "/mealPlanner" : item === "MyAccount" ? "myAccount" : item === "Log In" ? "/lohin" : item === "About Us" ? "aboutUs" : ``}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* // logout   */}

        <div className="ml-8 hidden lg:flex lg:gap-2">
          <button
            onClick={handleSubscribeClick}
            className="bg-P-Green1 text-white font-medium text-base py-1 px-7 rounded-lg flex items-center justify-center  hover:bg-P-Green2"
          >
            Try Free for 30-Days
          </button>
        </div>
        {/* toggle button  */}
        <button onClick={toggleSidebar} className="lg:hidden text-Text1 hover:text-S-Orange">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {/* // mobile links  */}

      <div className={`fixed top-0 right-0 h-full w-64 shadow-lg  bg-white ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out lg:hidden z-50`}>
        <div className="p-5">
          <button onClick={toggleSidebar} className=" absolute top-4 right-4 text-Text1 hover:text-S-Orange">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <ul className="mt-8 flex flex-col gap-4 font-roboto font-bold items-start text-base">
            {["Home", "Try Free for 30-Days", "My Account", "Log In", "About Us"].filter(Boolean).map((item, index) => (
              <li key={index}>
                <Link href={item === "Home" ? "/" : item === "Try Free for 30-Days" ? "/mealPlanner" : item === "MyAccount" ? "myAccount" : item === "Log In" ? "/lohin" : item === "About Us" ? "aboutUs" : ``}>{item}</Link>
              </li>
            ))}
          </ul>

          <div className=" mt-3 flex gap-2">
            <button
              // onClick={handleSubscribeClick}
              className="bg-P-Green1 text-white font-medium text-base py-1 px-7 rounded-lg flex items-center justify-center  hover:bg-P-Green2"
            >
              Try Free for 30-Days
            </button>
          </div>
        </div>
      </div>
      {isSidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={toggleSidebar}></div>}
    </>
  );
};

export default NavBar;
