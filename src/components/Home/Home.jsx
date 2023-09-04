import React, { useEffect, useState } from "react";
import Card from "../Cards/Card";
import './Home.css'

export default function Home() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.chucknorris.io/jokes/categories"
        );
        const data = await response.json();
        setCategory([...data]);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }
    fetchData();
  }, []);
  console.log(category)
  return (
    <>
      <div className="container">
        <h1 className="header">Chuck Norries</h1>

        <div className="cards-container">
          {category.map((ele) => {
            return <Card categoryName={ele}/>;
          })}
        </div>

      </div>
    </>
  );
}
