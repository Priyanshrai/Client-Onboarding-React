import React, { useState } from 'react';
import StepForm from './components/StepForm';
import Preview from './components/Preview';

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
    country: '',
    businessName: '',
    registrationNumber: '',
    address: '',
    contact: '',
    currency: 'EURO',
    dateFormat: 'mm/dd/yyyy',
    timeFormat: '12 Hrs',
    businessUnits: [
      { name: '', departments: ['', '', ''] },
      { name: '', departments: ['', '', ''] },
      { name: '', departments: ['', '', ''] }
    ]
  });

  const handleFormUpdate = (newData: Partial<FormData>) => {
    setFormData({ ...formData, ...newData });
  };

  return (
    <div className="App flex">
      <StepForm formData={formData} onUpdate={handleFormUpdate} />
      <Preview formData={formData} />
    </div>
  );
}

export default App;