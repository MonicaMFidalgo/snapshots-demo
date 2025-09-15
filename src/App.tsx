import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from 'react-router-dom';
import ScreencapturePreview from './components/ScreencapturePreview';
import { screenshots } from './data/dummyData.ts';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <div className='p-6'>
              <h2 className='text-2xl font-semibold mb-4'>
                Available Screenshots
              </h2>
              <div className='overflow-x-auto'>
                <table className='min-w-full border border-gray-200 divide-y divide-gray-200'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th className='px-4 py-2 text-left text-sm font-medium text-gray-700'>
                        ID
                      </th>
                      <th className='px-4 py-2 text-left text-sm font-medium text-gray-700'>
                        Name
                      </th>
                      <th className='px-4 py-2 text-left text-sm font-medium text-gray-700'>
                        Link
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200'>
                    {Object.values(screenshots).map((s) => (
                      <tr key={s.id} className='hover:bg-gray-50'>
                        <td className='px-4 py-2 text-sm text-gray-800'>
                          {s.id}
                        </td>
                        <td className='px-4 py-2 text-sm text-gray-800'>
                          {s.name}
                        </td>
                        <td className='px-4 py-2 text-sm text-blue-600 hover:underline'>
                          <Link to={`/layout/screenshot/${s.id}`}>
                            View Preview
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          }
        />
        <Route
          path='/layout/screenshot/:screenshotId'
          element={<ScreencapturePreview />}
        />
      </Routes>
    </Router>
  );
}

export default App;
