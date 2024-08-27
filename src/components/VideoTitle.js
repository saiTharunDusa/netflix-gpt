
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-12 absolute bg-gradient-to-r from-black">
      <h1 className="font-bold text-5xl text-white">{title}</h1>
      <p className="py-6 text-lg w-1/4 text-white">{overview}</p>
      <div>
        <button className="bg-white text-black font-bold p-4 px-12 text-xl rounded-lg hover:bg-opacity-70">
          ▶️Play
        </button>
        <button className="mx-2 bg-gray-500 text-white font-bold p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-70">
          ℹ️More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
