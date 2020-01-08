import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import React from "react";

const Loading = () => (
  <div className="story-card">
    <SkeletonTheme
      color="rgba(177,177,177,0.1)"
      highlightColor="rgba(177,177,177,0.15)"
    >
      <h3 className="story">
        <Skeleton count={2} />
      </h3>
      <p>
        <Skeleton count={3} />
      </p>
    </SkeletonTheme>
  </div>
);

export default () => (
  <div className="stories-list row">
    <Loading />
    <Loading />
    <Loading />
    <Loading />
    <Loading />
    <Loading />
    <Loading />
    <Loading />
    <Loading />
  </div>
);
