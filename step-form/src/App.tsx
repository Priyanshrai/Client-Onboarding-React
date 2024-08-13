import React, { useState } from "react";
import StepForm from "./components/StepForm";
import Preview from "./components/Preview";
import Logo from "./components/logo"; // Ensure correct import path

interface BusinessUnit {
  name: string;
  departments: string[];
}

interface FormData {
  country: string;
  businessName: string;
  registrationNumber: string;
  address: string;
  contact: string;
  currency: string;
  dateFormat: string;
  timeFormat: string;
  businessUnits: BusinessUnit[];
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    country: "",
    businessName: "",
    registrationNumber: "",
    address: "",
    contact: "",
    currency: "EURO",
    dateFormat: "mm/dd/yyyy",
    timeFormat: "12 Hrs",
    businessUnits: [
      { name: "", departments: ["", "", ""] },
      { name: "", departments: ["", "", ""] },
      { name: "", departments: ["", "", ""] },
    ],
  });

  const handleFormUpdate = (newData: Partial<FormData>) => {
    setFormData({ ...formData, ...newData });
  };

  return (
    <div className="App min-h-screen flex flex-col bg-gray-50 p-12">
      <div className="flex items-center justify-between w-full max-w-6xl ">
        <Logo className="" />
        <h1 className="text-4xl font-bold text-teal-700">
          Client Onboarding
        </h1>
      </div>
      <div className="w-full max-w flex flex-wrap">
        <div className="w-full lg:w-2/6 p-6">
          <StepForm formData={formData} onUpdate={handleFormUpdate} />
        </div>
        <div className="w-full lg:w-4/6 p-6">
          <Preview formData={formData} />
        </div>
      </div>
    </div>
  );
};

export default App;
