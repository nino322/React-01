import { useState } from "react";
import Modal from "../Modal/Modal";
import "./FishCard.css";

const FishCard = ({
  info,
  name,
  region,
  scientificName,
  illustrationPhoto,
  fishClicked,
  fishImgClicked,
}) => {
  const [isShowing, setIsShowing] = useState(false);
  const [stars, setStars] = useState(0);
  const [unLikes, setUnLikes] = useState(0);

  const handleClick = () => {
    fishClicked({ info, name });
  };

  const handleImgClicked = () => {
    fishImgClicked({ illustrationPhoto });
  };

  const showFish = () => {
    setIsShowing(true);
  };

  const handleLikeClicked = () => {
    setStars((prevStar) => prevStar + 1);
  };

  const handleUnlikeClicked = () => {
    setUnLikes((prevLikes) => prevLikes + 1);
  };

  const rating = () => {
    if (stars === 0 && unLikes === 0) {
      return 0;
    } else if (stars - unLikes < 0) {
      return 0;
    }

    let result = ((stars - unLikes) / (stars + unLikes)) * 10;
    let rounded = result.toFixed(2);

    return rounded;
  };
  const renderStars = () => {
    let starIcon = "";

    if (rating() > 9) {
      starIcon += "⭐⭐⭐⭐⭐ Excellent  ";
    } else if (rating() > 7) {
      starIcon += "⭐⭐⭐⭐ Good  ";
    } else if (rating() > 5) {
      starIcon += "⭐⭐⭐ Normal  ";
    } else if (rating() > 2) {
      starIcon += "⭐⭐ Bad  ";
    } else if (rating() <= 2 && rating() > 0.00001) {
      starIcon += "⭐ Very Bad  ";
    } else if (starIcon.length === 0) {
      starIcon += "Please rate the fish";
    }

    return starIcon;
  };

  return (
    <>
      <div className="card" onClick={() => handleClick()}>
        <img
          src={illustrationPhoto.src}
          alt={illustrationPhoto.alt}
          onClick={() => handleImgClicked()}
        />
        <h3>{name}</h3>
        <p>Scientific Name: {scientificName}</p>
        <p>Region: {region}</p>
        <p>Information: {info}</p>
        <button className="show-button" onClick={() => showFish()}>
          Show
        </button>
      </div>
      {isShowing && (
        <Modal onClose={() => setIsShowing(false)}>
          <img src={illustrationPhoto.src} alt={illustrationPhoto.alt} />
          <span>
            {renderStars()}
            <h4>Rating: {rating()}</h4>
            <button
              className="like-button"
              onClick={() => {
                handleLikeClicked();
              }}
            >
              👍
            </button>
            <button
              className="unlike-button"
              onClick={() => handleUnlikeClicked()}
            >
              👎
            </button>
          </span>
        </Modal>
      )}
    </>
  );
};

export default FishCard;