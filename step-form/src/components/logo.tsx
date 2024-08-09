import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`logo ${className}`}>
      <img 
        src="/path/to/your/logo.png" 
        alt="Company Logo" 
        className="w-32 h-auto" // Adjust size as needed
      />
    </div>
  );
};

export default Logo;