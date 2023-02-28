import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])


  return (
    <main>
      <ul className="cards">
          <ListingCard />
      </ul>
    </main>
  );
}

export default ListingsContainer;
