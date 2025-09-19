// components/FixedButtons.tsx
import React from "react";
import { ShoppingCart } from "lucide-react";   
import { Settings } from "lucide-react";      

const FixedButtons: React.FC = () => {
  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col space-y-2 z-50">
      {/* Buy Now */}
      <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition flex items-center space-x-2">
        <ShoppingCart className="w-5 h-5" />  {/* Choti cart icon */}
        <span>Buy Now</span>
      </button>

      {/* Customize */}
      <button className="bg-white text-black py-2 px-6 border border-gray-300 rounded-sm hover:bg-gray-100 transition flex items-center space-x-2">
        <Settings className="w-5 h-5" />   {/* Customize icon */}
        <span>Customize</span>
      </button>
    </div>
  );
};

export default FixedButtons;
