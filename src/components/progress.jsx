import React from 'react';

const Progress = () => {
  <progress max="100" value="70"></progress>;

  return (
    <div className="w-full bg-gray-200 dark:bg-gray-700">
      <div
        className="bg-blue-600 flex items-center justify-center text-xs font-medium text-blue-100 text-center p-0.5 py-1.5 leading-none"
        style={{ width: '45%' }}>
        <span>45%</span>
      </div>
    </div>
  );
};

export default Progress;
