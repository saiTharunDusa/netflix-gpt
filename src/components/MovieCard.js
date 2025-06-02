import { TMBD_IMG_URL } from "../utils/constants";

const MovieCard = ({
  id,
  posterPath,
  activeTrailerId,
  trailer,
  handleTrailerClick,
}) => {
  if (!posterPath) return null;

  return (
    <div className="w-36 md:w-48 pr-4">
      <img
        alt="Movie Card"
        src={TMBD_IMG_URL + posterPath}
        className="rounded hover:rounded-lg hover:border-2 hover:border-red-500"
        onClick={() => handleTrailerClick(id)}
      />
      {activeTrailerId === id && trailer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="w-full max-w-5xl aspect-video relative">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=0&loop=0&playlist=${trailer.key}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
            <button
              onClick={() => handleTrailerClick(id)} 
              className="absolute top-2 right-2 text-white bg-red-600 rounded-full px-3 py-1 text-sm font-bold shadow"
            >
              ✕
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default MovieCard;
