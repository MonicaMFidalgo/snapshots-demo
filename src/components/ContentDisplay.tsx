import React from 'react';
import {
  ScreenshotTypeEnum,
  type ScreencaptureData,
  type ViewportMode,
} from '../types';

interface ContentViewerProps {
  screenshot: ScreencaptureData;
  viewportMode: ViewportMode;
}

const ContentViewer: React.FC<ContentViewerProps> = ({
  screenshot,
  viewportMode,
}) => {
  const getViewportDimensions = () => {
    if (viewportMode === 'mobile') {
      return {
        width: 375,
        height: 667,
        className: 'rounded-3xl border-8 border-gray-800 shadow-2xl',
      };
    }

    return {
      width: 1200,
      height: 800,
      className: 'rounded-lg border border-gray-200 shadow-xl',
    };
  };

  const { width, height, className } = getViewportDimensions();

  return (
    <div className='bg-gray-100 min-h-screen py-8'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div
          className={`bg-white overflow-hidden transition-all duration-300 ${className}`}
          style={{
            width: Math.min(width, window.innerWidth - 32),
            height: Math.min(height, window.innerHeight - 200),
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        >
          {screenshot.contentType === ScreenshotTypeEnum.HTML &&
          screenshot.htmlContent ? (
            <iframe
              srcDoc={screenshot.htmlContent}
              className='w-full border-0'
              title={`Preview of ${screenshot.name}`}
              style={{ height: viewportMode === 'mobile' ? '600px' : '800px' }}
              sandbox='allow-scripts allow-same-origin allow-forms'
            />
          ) : (
            <img
              src={screenshot.imageUrl}
              alt={screenshot.name}
              className='w-full h-auto'
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentViewer;
