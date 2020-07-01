import React from "react";
import "../../assets/css/style.css";

import loading01 from "../../assets/images/loading01.svg";
import loading02 from "../../assets/images/loading02.svg";

function Loading() {
  return (
    <div>
      <div class="loading style1">
        <img src={loading01} alt="loading" title="loading" />
        در حال بارگذاری...
      </div>
      <div class="loading style2">
        <img
          src={loading02}
          alt="loading"
          title="loading"
          className="display_none"
        />
        در حال بارگذاری...
      </div>
    </div>
  );
}

export default Loading;
