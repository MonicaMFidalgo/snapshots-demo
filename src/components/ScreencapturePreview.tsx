import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PreviewHeader from './PreviewHeader';
import PreviewFooter from './PreviewFooter';
import ContentDisplay from './ContentDisplay';
import { screenshots } from '../data/dummyData';
import type { ScreencaptureData, ViewportMode } from '../types';

const ScreenshotPreview: React.FC = () => {
  const { screenshotId } = useParams<{ screenshotId: string }>();
  const [screenshotData, setScreenshotData] =
    useState<ScreencaptureData | null>(null);
  const [viewportMode, setViewportMode] = useState<ViewportMode>('desktop');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('screenshotId:', screenshotId);
    if (screenshotId) {
      setLoading(true);
      // fake API call delay?
      setTimeout(() => {
        console.log('screenshotId:', screenshotId, screenshots);
        const data = screenshots[screenshotId] ?? null;
        setScreenshotData(data);
        setLoading(false);
      }, 500);
    }
  }, [screenshotId]);

  if (loading) {
    return (
      <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4'></div>
          <p className='text-gray-600'>Loading preview...</p>
        </div>
      </div>
    );
  }

  if (!screenshotData) {
    return (
      <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
        <div className='text-center'>
          <h2 className='text-2xl font-semibold text-gray-800 mb-2'>
            Preview Not Found
          </h2>
          <p className='text-gray-600'>
            The screenshot you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      <PreviewHeader
        screenshotData={screenshotData}
        currentUrl={window.location.href}
        viewportMode={viewportMode}
        onViewportChange={setViewportMode}
      />

      <div className='flex-1 flex flex-col items-center py-6'>
        <ContentDisplay
          screenshot={screenshotData}
          viewportMode={viewportMode}
        />
      </div>

      <PreviewFooter />
    </div>
  );
};

export default ScreenshotPreview;
