import React from 'react';

export const MovieListSkeleton = () => (
  <div className="movie__list">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="movie__card">
        <div className="skeleton-img skeleton"></div>
        <div className="skeleton-text skeleton"></div>
        <div className="skeleton-text short skeleton"></div>
      </div>
    ))}
  </div>
);

export const MovieDetailsSkeleton = () => (
  <div className="movie__detail">
    <div className="movie__detail--card">
      <div className="skeleton-img-large skeleton"></div>
      <div className="movie__detail--details">
        <div className="skeleton-text large skeleton">&nbsp;</div>
        <div className="skeleton-text skeleton">&nbsp;</div>
        <div className="skeleton-text skeleton">&nbsp;</div>
        <div className="skeleton-text skeleton">&nbsp;</div>
        <div className="skeleton-text skeleton">&nbsp;</div>
        <div className="skeleton-text skeleton">&nbsp;</div>
        <div className="skeleton-text skeleton">&nbsp;</div>
        <div className="skeleton-text skeleton">&nbsp;</div>
      </div>
    </div>
  </div>
);
