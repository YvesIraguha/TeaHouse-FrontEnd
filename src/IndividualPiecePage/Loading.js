import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import React from "react";
import "./index.css";

export default () => (
  <div className="piece-container">
    <div className="loading-content">
      <SkeletonTheme
        color="rgba(177,177,177,0.1)"
        highlightColor="rgba(177,177,177,0.15)"
      >
        <h3 className="story">
          <Skeleton count={2} width={500} height={10} />
        </h3>
        <p>
          <Skeleton count={16} width={500} height={10} />
        </p>
      </SkeletonTheme>
    </div>
  </div>
);
