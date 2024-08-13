import React from "react";

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

interface PreviewProps {
  formData: FormData;
}

const Preview: React.FC<PreviewProps> = ({ formData }) => {
  return (
    <div className="preview flex-1 p-6 bg-white shadow-xl rounded-lg border border-gray-200 h-full">
      <h2 className="text-2xl font-semibold mb-6 border-b pb-2 text-teal-600">
        Preview
      </h2>
      <div className="mb-6">
        <h3 className="text-xl font-medium mb-4 text-teal-500">
          Basic Information
        </h3>
        <p className="text-gray-700 mb-2">
          Country: {formData.country || "N/A"}
        </p>
        <p className="text-gray-700 mb-2">
          Business Name: {formData.businessName || "N/A"}
        </p>
        <p className="text-gray-700 mb-2">
          Registration Number: {formData.registrationNumber || "N/A"}
        </p>
        <p className="text-gray-700 mb-2">
          Address: {formData.address || "N/A"}
        </p>
        <p className="text-gray-700 mb-2">
          Contact: {formData.contact || "N/A"}
        </p>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-medium mb-4 text-teal-500">Settings</h3>
        <p className="text-gray-700 mb-2">Currency: {formData.currency}</p>
        <p className="text-gray-700 mb-2">Date Format: {formData.dateFormat}</p>
        <p className="text-gray-700 mb-2">Time Format: {formData.timeFormat}</p>
      </div>
      <div>
        <h3 className="text-xl font-medium mb-4 text-teal-500">
          Business Units
        </h3>
        {formData.businessUnits.map((unit, index) => (
          <div key={index} className="mb-4 bg-teal-50 p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-teal-700">
              {unit.name || `Business Unit ${index + 1}`}
            </h4>
            <ul className="list-disc list-inside ml-4">
              {unit.departments.map((dept, deptIndex) => (
                <li key={deptIndex} className="text-gray-700">
                  {dept || `Department ${deptIndex + 1}`}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preview;
