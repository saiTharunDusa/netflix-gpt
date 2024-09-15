const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent flex flex-col justify-center px-4 sm:px-8 md:px-12">
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
        {title}
      </h1>
      <p className="py-2 md:py-4 text-sm sm:text-base md:text-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3 text-white">
        {overview}
      </p>
      <div className="flex flex-row mt-2 sm:mt-4 space-x-2 sm:space-x-4">
        <button className="bg-white text-black font-bold py-1 px-3 sm:py-2 sm:px-4 md:py-3 md:px-6 text-sm sm:text-base rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white font-bold py-1 px-3 sm:py-2 sm:px-4 md:py-3 md:px-6 text-sm sm:text-base bg-opacity-50 rounded-lg hover:bg-opacity-70">
          ℹ️ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;