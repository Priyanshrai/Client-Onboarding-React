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
      {/* Top Section: Company Information */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-gray-700"><strong>{formData.businessName || "Business Name"}</strong></p>
          <p className="text-gray-700">{formData.country || "Country"}</p>
          <p className="text-gray-700">{formData.registrationNumber || "Registration Number"}</p>
          <p className="text-gray-700">{formData.address || "Address"}</p>
        </div>
        <div className="text-right">
          
          {/* Placeholder for the logo */}
          <div className="h-16 w-16 bg-gray-200 inline-block mt-4">Client's Logo</div>
          <p className="text-gray-700">{formData.contact || "Contact"}</p>
        </div>
      </div>
      
      {/* Middle Section: Settings */}
      <div className="grid grid-cols-2 gap-4 mb-6 border-t pt-4">
        <div>
          <p className="text-gray-700"><strong>Date Format:</strong> {formData.dateFormat || "mm/dd/yyyy"}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-700"><strong>Currency:</strong> {formData.currency || "N/A"}</p>
          <p className="text-gray-700"><strong>Time Format:</strong> {formData.timeFormat || "12 Hrs"}</p>
        </div>
      </div>
      
      {/* Bottom Section: Business Units */}
      <div className="border-t pt-4">
        {formData.businessUnits.map((unit, index) => (
          <div key={index} className="mb-4">
            {/* Business Unit and Location */}
            <div className="grid grid-cols-2 mb-2">
              <div className="text-teal-700 font-bold text-lg">
                {`Business Unit ${index + 1}`}
              </div>
              <div className="text-right text-gray-500">
                {("Location")}
              </div>
            </div>

            {/* Departments */}
            {unit.departments.map((dept, deptIndex) => (
              <div key={deptIndex} className="grid grid-cols-2 mb-1">
                <div className="text-gray-700">
                  {`Department ${deptIndex + 1}`}
                </div>
                <div className="text-right text-gray-700">
                  {dept || `Department Name`}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preview;
