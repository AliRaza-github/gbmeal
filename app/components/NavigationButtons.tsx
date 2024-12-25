import Link from "next/link";
import React from "react";

interface NavigationButtonsProps {
  onNext: () => void;
  onBack?: () => void;
  data: string;
  disableNext?: boolean;
  onSignUp?: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ onNext, onBack, disableNext, data, onSignUp }) => (
  <>
    <div className="flex justify-start gap-2 mt-4">
      {onBack && (
        <button onClick={onBack} className=" lg:px-16 px-10 py-2 border-2 text-white  hover:bg-gray-300 rounded-lg">
          Back
        </button>
      )}
      {data === "Your Details" ? (
        <button onClick={onSignUp} className="lg:px-16 px-10  bg-white  text-black shadow-[inset_4px_4px_8px_#2a322179]  rounded-lg">
          SignUp
        </button>
      ) : (
        <button onClick={onNext} className={` lg:px-16 px-10 py-2 text-black shadow-[inset_4px_4px_8px_#2a322179]  rounded-lg ${disableNext ? "bg-white cursor-not-allowed" : "bg-green-500 hover:bg-green-600"}`} disabled={disableNext}>
          Next
        </button>
      )}
    </div>
    <div className="text-white mt-2">
      {data === "Your Details" ? (
        <p>
          Already Have An Acccount? <span className="text-blue-400 cursor-pointer"><Link href="/login">login</Link></span>
        </p>
      ) : (
        <p></p>
      )}
    </div>
  </>
);

export default NavigationButtons;
