const Loader = ({ loaderText = "Loading..." }) => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-5 bg-white">
      <div className="loader-animation w-10 h-10 rounded-full border-4 border-dashed border-slate-900 animate-spin"></div>
      <p className="loader-text text-center text-lg text-slate-900 font-bold">
        {loaderText}
      </p>
    </div>
  );
};

export default Loader;
