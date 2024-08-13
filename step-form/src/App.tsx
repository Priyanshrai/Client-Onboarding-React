import React, { useState } from "react";
import StepForm from "./components/StepForm";
import Preview from "./components/Preview";

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
    <div className="App min-h-screen flex flex-col items-center bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-teal-700 mb-8">
        Business Information Form
      </h1>
      <div className="w-full max-w-6xl flex flex-wrap">
        <div className="w-full lg:w-2/5 p-4">
          <StepForm formData={formData} onUpdate={handleFormUpdate} />
        </div>
        <div className="w-full lg:w-3/5 p-4">
          <Preview formData={formData} />
        </div>
      </div>
    </div>
  );
};

export default App;
