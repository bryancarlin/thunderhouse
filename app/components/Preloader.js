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

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("load", handlePageLoad);
      }
    };
  }, []);

  const handlePageLoad = () => {
    setPageReady(true);
  };

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
