import React from 'react';
import { Monitor, Smartphone } from 'lucide-react';
import type { ViewportMode } from '../types';

interface ViewportToggleProps {
  viewportMode: ViewportMode;
  onViewportChange: (mode: ViewportMode) => void;
}

const ViewportToggle: React.FC<ViewportToggleProps> = ({
  viewportMode,
  onViewportChange,
}) => {
  return (
    <div className='flex items-center bg-white rounded-lg border border-gray-200 p-1 mt-1 shadow-sm'>
      <button
        onClick={() => onViewportChange('desktop')}
        className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
          viewportMode === 'desktop'
            ? 'bg-blue-600 text-white'
            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
        }`}
      >
        <Monitor className='w-4 h-4 mr-2' />
        Desktop
      </button>

      <button
        onClick={() => onViewportChange('mobile')}
        className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
          viewportMode === 'mobile'
            ? 'bg-blue-600 text-white'
            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
        }`}
      >
        <Smartphone className='w-4 h-4 mr-2' />
        Mobile
      </button>
    </div>
  );
};

export default ViewportToggle;
