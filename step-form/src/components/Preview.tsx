import React from 'react';

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
    <div className="preview w-1/2 p-4 bg-gray-100">
      <h2 className="text-2xl mb-4">Preview</h2>
      <div className="mb-4">
        <h3 className="text-xl mb-2">Basic Information</h3>
        <p>Country: {formData.country || 'N/A'}</p>
        <p>Business Name: {formData.businessName || 'N/A'}</p>
        <p>Registration Number: {formData.registrationNumber || 'N/A'}</p>
        <p>Address: {formData.address || 'N/A'}</p>
        <p>Contact: {formData.contact || 'N/A'}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl mb-2">Settings</h3>
        <p>Currency: {formData.currency}</p>
        <p>Date Format: {formData.dateFormat}</p>
        <p>Time Format: {formData.timeFormat}</p>
      </div>
      <div>
        <h3 className="text-xl mb-2">Business Units</h3>
        {formData.businessUnits.map((unit, index) => (
          <div key={index} className="mb-2">
            <h4 className="font-bold">{unit.name || `Business Unit ${index + 1}`}</h4>
            <ul>
              {unit.departments.map((dept, deptIndex) => (
                <li key={deptIndex}>{dept || `Department ${deptIndex + 1}`}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Preview;