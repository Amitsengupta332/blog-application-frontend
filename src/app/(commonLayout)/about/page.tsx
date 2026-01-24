"use client";

//! next js use client temon pocondo kore na.

import { useEffect, useState } from "react";

export default function AboutPage() {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {})();
  }, []);

  //* For simulating load time
  // await new Promise((resolve) => setTimeout(resolve, 4000));

  //* For simulating error
  // throw new Error("Something went wrong");

  return (
    <div>
      <h1> This is about page component </h1>
    </div>
  );
}
