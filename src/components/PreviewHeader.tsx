import React, { useState } from 'react';
import { Copy, Share2, Check } from 'lucide-react';
import type { ScreencaptureData, ViewportMode } from '../types';
import ViewportToggle from './ViewportToggle';

interface HeaderProps {
  screenshotData: ScreencaptureData;
  currentUrl: string;
  viewportMode: ViewportMode;
  onViewportChange: (mode: ViewportMode) => void;
}

const Header: React.FC<HeaderProps> = ({
  screenshotData,
  currentUrl,
  viewportMode,
  onViewportChange,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: screenshotData.name,
          text: `Check out this preview: ${screenshotData.name}`,
          url: currentUrl,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback to copy URL if Web Share API is not available
      handleCopyUrl();
    }
  };

  return (
    <header className='bg-white border-b border-gray-200 shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <div>
              <h1 className='text-lg font-semibold text-gray-900'>
                {screenshotData.name}
              </h1>
              <p className='text-sm text-gray-500'>
                ID: {screenshotData.id} • Created {screenshotData.createdAt}
              </p>
            </div>
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <button onClick={handleCopyUrl} className='copy-button'>
                {copied ? (
                  <>
                    <Check
                      className='w-4 h-4 text-green-600'
                      fill='white'
                      stroke='none'
                    />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className='w-4 h-4' />
                    <span>Copy URL</span>
                  </>
                )}
              </button>

              {/* <button
                onClick={handleShare}
                className='inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors'
              >
                <Share2 className='w-4 h-4 mr-2' />
                Share
              </button> */}
            </div>
            <ViewportToggle
              viewportMode={viewportMode}
              onViewportChange={onViewportChange}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
