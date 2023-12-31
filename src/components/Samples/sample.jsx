import React, { useEffect, useState } from "react";
// import { video } from "../../utlis";

export default function Sample() {
  const [fav, setFav] = useState();
  useEffect(() => {
    const favFetch = async () => {
      try {
        const response = await fetch(`http://localhost/ebook/SERVER/fav`, {
          mode: "cors",
          method: "get",
          headers: { "Content-Type": "application/json" },
        });
        const favItem = await response.json();
        setFav(favItem);
        // console.log({ fav });
      } catch (error) {
        console.error("Error in fetching the  data:", error);
      }
    };
    favFetch();
  }, []);
  console.log({ fav });

  return (
    <div>
      <div className="container">
        <h1>Our Rated Section</h1>
        <div className="platform-content">
          {fav?.map((itm) => (
            <div className="video-list" key={itm.id}>
              {itm.path}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
