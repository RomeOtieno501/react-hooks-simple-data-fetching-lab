// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null); // State to hold the dog image URL
  const [isLoading, setIsLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    // Fetch a random dog image on component mount
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message); // Update the dog image state
        setIsLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => console.error("Error fetching dog image:", error));
  }, []);

  return (
    <div className="App">
      {isLoading ? ( // Show "Loading..." while the fetch is in progress
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" /> // Display the dog image once fetched
      )}
    </div>
  );
}

export default App;

