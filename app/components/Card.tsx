"use client";
import { useState } from "react";
import cardbgimg from "../../public/assets/Resource/bgcardimg.png";
import { cards } from "../cardsData/cardsData";
import SelectionCard from "./SelectionCard";
import NavigationButtons from "./NavigationButtons";
import axios from "axios";



const Card: React.FC = () => {
  const [step, setStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({}); // Store selections for each step
  const currentCard = cards[step]; // Get the current step's data

  const handleSelect = (name: string, label: string) => {
    setSelectedOptions((prev) => ({ ...prev, [name]: label }));
  };
  const handleInputChange = (field: string, value: string) => {
    setSelectedOptions((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => setStep((prev) => Math.min(prev + 1, cards.length - 1));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleSignUp = async () => {
    console.log("...client",selectedOptions)
    try {
      const response = await axios.post("/api/signUp", selectedOptions);
      console.log("SignUp successfully");
    } catch (error) {
      console.error("Error during SignUp:", error);
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
        <div className="relative container max-w-[32rem] ">
          <h1 className="text-2xl text-white font-bold mb-4 border-b-8 border-S-Orange leading-none inline-block">{currentCard.subtitle}</h1>
          <h1 className="text-2xl  text-white font-bold mb-4">{currentCard.title}</h1>
          <p className="mb-6 text-white">{currentCard.description}</p>

          {/* render selection form    */}

          {currentCard.title === "Your Details" ? (
            <div className="flex  flex-col gap-4 ">
              {currentCard.elements.map((element) => (
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
          ) : (
            <div className="grid grid-cols-2 gap-4 ">
              {currentCard.elements.map((element) => (
                <SelectionCard
                  //@ts-ignore
                  key={element.label}
                  label={element.label}
                  icon={element.image} 
                  isSelected={selectedOptions[element.name] === element.label}
                  onClick={() => handleSelect(element.name, element.label)}
                />
              ))}
            </div>
            
          )}
          <NavigationButtons
            onSignUp={handleSignUp}
            onNext={handleNext}
            onBack={handleBack}
            data={currentCard.title}
            disableNext={!selectedOptions[currentCard.elements[0]?.name]} 
          />
        </div>
      </div>
    </>
  );
};
export default Card;
