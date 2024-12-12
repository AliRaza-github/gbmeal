"use client"
import React from 'react';

interface SelectionCardProps {
  label: string;
  icon: string;
  isSelected: boolean;
  onClick: () => void;
}

const SelectionCard: React.FC<SelectionCardProps> = ({ label, icon, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center p-4 border rounded-lg cursor-pointer ${
        isSelected ? 'border-S-Orange': 'border-white'
      }`}
      // className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer ${
      //   isSelected ? 'border-green-500 bg-green-100' : 'border-gray-300'
      // }`}
    >
      <img src={icon} alt={label} className="w-10 h-10 mb-2" />
      <span className="text-center font-semibold text-white">{label}</span>
     
    </div>
  );
};

export default SelectionCard;
