import React, { useState,useEffect } from 'react'
import './Model.css'

export default function Model({choiceCategory,setIsModalOpen,isModalOpen}) {
  const[joke,setJoke]=useState("")


  async function fetchJokes() {
    setJoke("")
    try {
      const response = await fetch(
        `https://api.chucknorris.io/jokes/random?category=${choiceCategory}`
      );
      const data = await response.json();
      setJoke(data.value);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }

  useEffect(() => {
    fetchJokes();
  }, [choiceCategory]);

  const loadNewJokes=()=>{
    fetchJokes()
  }

  return (
    <>
        <div className="modal-header">
            <h1 className='category-name'>{choiceCategory}</h1> 
            <span className="modal-close" onClick={()=>setIsModalOpen(!isModalOpen)}>
               <i class="fa-solid fa-xmark"></i>
            </span>
        </div>

        <div className="modal-body">
          
           {
            joke===""?
            <div class="spinner-4"></div>
            :
            <p className='modal-jokes'>" {joke} "</p>
           } 

          <button className='next-joke' onClick={loadNewJokes}>Next Joke</button>
        </div>
    </>
  )
}
