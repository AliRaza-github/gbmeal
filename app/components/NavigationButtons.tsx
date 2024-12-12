// components/NavigationButtons.tsx
import React from 'react';

interface NavigationButtonsProps {
  onNext: () => void;
  onBack?: () => void;
  data:string
  disableNext?: boolean;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ onNext, onBack, disableNext ,data}) => (
  <div className="flex justify-start gap-2 mt-4">
    {onBack && (
      <button
        onClick={onBack}
        className="px-24 py-2 border-2  hover:bg-gray-300 rounded-lg"
      >
        Back
      </button>
    )}
{data === "Your Details" ? (
 <button
 onClick={onNext}
 className={`px-24 py-2 text-black shadow-[inset_4px_4px_8px_#2a322179]  rounded-lg ${
   disableNext ? 'bg-white cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
 }`}
 disabled={disableNext}
>
 Sign UP
</button>

):(

    <button
      onClick={onNext}
      className={`px-24 py-2 text-black shadow-[inset_4px_4px_8px_#2a322179]  rounded-lg ${
        disableNext ? 'bg-white cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
      }`}
      disabled={disableNext}
    >
      Next
    </button>
  )}
  </div>
);

export default NavigationButtons;
