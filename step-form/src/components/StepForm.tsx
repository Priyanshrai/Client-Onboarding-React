import React, { useState } from "react";
import Logo from "./logo"; // Assume you have a Logo component

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

interface StepFormProps {
  formData: FormData;
  onUpdate: (newData: Partial<FormData>) => void;
}

const StepForm: React.FC<StepFormProps> = ({ formData, onUpdate }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onUpdate({ [name]: value } as Partial<FormData>);
  };

  const handleBusinessUnitChange = (
    index: number,
    field: string | number,
    value: string
  ) => {
    const newBusinessUnits = [...formData.businessUnits];
    if (field === "name") {
      newBusinessUnits[index].name = value;
    } else if (typeof field === "number") {
      newBusinessUnits[index].departments[field] = value;
    }
    onUpdate({ businessUnits: newBusinessUnits });
  };

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <Logo className="mb-4" />
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              placeholder="Country"
              className="mb-2 p-2 w-full border border-teal-300 rounded"
            />
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              placeholder="Business Name"
              className="mb-2 p-2 w-full border border-teal-300 rounded"
            />
            <input
              type="text"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleInputChange}
              placeholder="Business Registration Number"
              className="mb-2 p-2 w-full border border-teal-300 rounded"
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Address"
              className="mb-2 p-2 w-full border border-teal-300 rounded"
            />
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              placeholder="Contact"
              className="mb-2 p-2 w-full border border-teal-300 rounded"
            />
          </div>
        );
      case 2:
        return (
          <div>
            <input
              type="text"
              name="currency"
              value={formData.currency}
              onChange={handleInputChange}
              placeholder="Default Currency"
              className="mb-2 p-2 w-full border border-teal-300 rounded"
            />
            <input
              type="text"
              name="dateFormat"
              value={formData.dateFormat}
              onChange={handleInputChange}
              placeholder="Date Format"
              className="mb-2 p-2 w-full border border-teal-300 rounded"
            />
            <input
              type="text"
              name="timeFormat"
              value={formData.timeFormat}
              onChange={handleInputChange}
              placeholder="Time Format"
              className="mb-2 p-2 w-full border border-teal-300 rounded"
            />
          </div>
        );
      case 3:
        return (
          <div>
            {formData.businessUnits.map((unit, index) => (
              <div key={index} className="mb-4">
                <input
                  type="text"
                  value={unit.name}
                  onChange={(e) =>
                    handleBusinessUnitChange(index, "name", e.target.value)
                  }
                  placeholder={`Business Unit ${index + 1} Name`}
                  className="mb-2 p-2 w-full border border-teal-300 rounded"
                />
                {unit.departments.map((dept, deptIndex) => (
                  <input
                    key={deptIndex}
                    type="text"
                    value={dept}
                    onChange={(e) =>
                      handleBusinessUnitChange(index, deptIndex, e.target.value)
                    }
                    placeholder={`Department ${deptIndex + 1}`}
                    className="mb-2 p-2 w-full border border-teal-300 rounded"
                  />
                ))}
              </div>
            ))}
          </div>
        );
      case 4:
        return (
          <div className="table-container">
            <table className="w-full">
              <thead className="bg-teal-100">
                <tr>
                  <th className="p-2 text-left text-teal-700">Business Unit</th>
                  <th className="p-2 text-left text-teal-700">Department 1</th>
                  <th className="p-2 text-left text-teal-700">Department 2</th>
                  <th className="p-2 text-left text-teal-700">Department 3</th>
                </tr>
              </thead>
              <tbody>
                {formData.businessUnits.map((unit, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-2">{unit.name}</td>
                    {unit.departments.map((dept, deptIndex) => (
                      <td key={deptIndex} className="p-2">
                        <input
                          type="text"
                          value={dept}
                          onChange={(e) =>
                            handleBusinessUnitChange(
                              index,
                              deptIndex,
                              e.target.value
                            )
                          }
                          className="p-2 w-full border border-teal-300 rounded"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return <h2>Form Completed</h2>;
    }
  };

  return (
    <div className="step-form flex-1 p-6 bg-white shadow-xl rounded-lg border border-gray-200 h-full">
      <h2 className="text-2xl font-semibold mb-6 border-b pb-2 text-teal-600">
        Step {currentStep}
      </h2>
      {renderStep()}
      <div className="flex justify-between mt-6">
        {currentStep > 1 && (
          <button
            onClick={prevStep}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded"
          >
            Previous
          </button>
        )}
        {currentStep < 4 && (
          <button
            onClick={nextStep}
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default StepForm;
