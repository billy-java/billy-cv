//app\components\Loader.tsx


import React from 'react';

function Loader() {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-400"></div>
    </div>
  );
}

export default Loader;
