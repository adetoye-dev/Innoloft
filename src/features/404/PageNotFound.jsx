import React from "react";

const PageNotFound = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-7 bg-white">
      <h1 className="text-4xl text-slate-800 font-bold">Oops!</h1>
      <p className="font-bold text-xl text-slate-900">
        The requested page could not be found.
      </p>
    </div>
  );
};

export default PageNotFound;
