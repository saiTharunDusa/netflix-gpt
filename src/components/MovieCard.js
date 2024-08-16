import { TMBD_IMG_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img alt="Movie Card" src={TMBD_IMG_URL + posterPath} />
    </div>
  );
};
export default MovieCard;
