import React from "react";
import PropTypes from "prop-types";
function RankingWrapperSliderItems({ ...props }) {
  return (
    <div className="item">
      <div className="ranking-item">
        <img src={props.image} alt="manshuredanesh" title="image" />
        <h6>{props.user_name}</h6>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
RankingWrapperSliderItems.propTypes = {
  image: PropTypes.string.isRequired,
  user_name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default RankingWrapperSliderItems;
