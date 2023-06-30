"use client";

import React, { useEffect, useState } from "react";

const Preloader = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    const preloadDelay = 3000;

    const timer = setTimeout(() => {
      if (pageReady && loading) {
        setLoading(false);
      }
    }, preloadDelay);

    return () => {
      clearTimeout(timer);
    };
  }, [pageReady]);

  window.addEventListener("load", () => {
    setPageReady(true);
  });

  if (loading) {
    return (
      <div className="preloader">
        <div className="preloader__image">
          <img src="/images/th-loader.gif" alt="Preloader" />
        </div>
      </div>
    );
  } else {
    return <>{children}</>;
  }
};

export default Preloader;