import React, { useEffect, useState } from "react";
import Card from "../Cards/Card";
import "./Home.css";
import Model from "../Model/Model";

export default function Home() {
  const [category, setCategory] = useState([]);
  const [choiceCategory, setChoiceCategory] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const showJokesOn = (categoryName) => {
    setChoiceCategory(categoryName);
    if (!isModalOpen) {
      setIsModalOpen(!isModalOpen);
    }
  };

  return (
    <>
      <div className="container">
        {category.length === 0 ? (
          <div className="bar-loader">
            <span class="bars"></span>
          </div>
        ) : (
          <>
            <h1 className="header">Chuck Norries</h1>
            <div className="cards-container">
              {category.map((ele) => {
                return <Card showJokesOn={showJokesOn} categoryName={ele} />;
              })}
            </div>
            {isModalOpen && (
              <div className="hidden">
                <Model
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                  choiceCategory={choiceCategory}
                />
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
