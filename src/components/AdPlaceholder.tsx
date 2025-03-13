
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface AdPlaceholderProps {
  type: 'vertical' | 'horizontal';
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ type }) => {
  // Dimensions based on common Google AdSense formats
  const dimensions = {
    vertical: {
      width: '300px',
      height: '600px',
      text: '300 x 600',
      className: 'w-full h-[600px]'
    },
    horizontal: {
      width: '728px',
      height: '90px',
      text: '728 x 90',
      className: 'w-full h-[90px] md:h-[90px]'
    }
  };

  const adInfo = dimensions[type];

  return (
    <div 
      className={`${adInfo.className} relative overflow-hidden rounded-lg border border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center group transition-all hover:bg-gray-100`}
    >
      <div className="absolute top-2 right-2 bg-gray-200 text-gray-500 text-[10px] px-1.5 py-0.5 rounded">
        AD
      </div>
      
      <div className="text-center px-4">
        <div className="text-gray-400 flex items-center justify-center mb-1">
          <ExternalLink size={14} className="mr-1" />
          <span className="text-xs">Sponsored</span>
        </div>
        <p className="text-gray-500 text-sm font-medium">Google AdSense</p>
        <p className="text-gray-400 text-xs mt-1">{adInfo.text}</p>
      </div>
      
      <div className="mt-4 px-4 text-center">
        <p className="text-gray-400 text-xs max-w-[200px]">
          This space would display relevant ads for international students
        </p>
      </div>
    </div>
  );
};

export default AdPlaceholder;
