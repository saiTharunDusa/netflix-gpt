import VideoBackground from "./VideoBackground";

const VideoTitle = ({ title, overview }) => {
  const handleClick = ()=>{
    
  }
  return (
    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent flex flex-col justify-center px-8 sm:px-12 md:px-16">
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
        {title}
      </h1>
      <p className="py-2 md:py-4 text-sm sm:text-base md:text-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3 text-white">
        {overview}
      </p>
      
    </div>
  );
};

export default VideoTitle;