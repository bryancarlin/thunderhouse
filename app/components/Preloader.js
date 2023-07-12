"use client";

import React, { useEffect, useState } from "react";

const Preloader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (document.readyState === "complete") {
        setIsLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="preloader">
        <div className="preloader__image">
          <img src="/images/thlogo.png" alt="Preloader" />
        </div>
      </div>
    );
  } else {
    return <>{children}</>;
  }
};

export default Preloader;
