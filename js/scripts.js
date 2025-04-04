const hb = document.querySelector("#hamburgerBtn");
const pw = document.querySelector("#pageWrapper");

hb.addEventListener("click", () => {
  pw.classList.toggle("moveOver");
});

// Import the hotel data
import { hotels } from "../data/hotels.js"; // Ensure the correct path
console.log(hotels);

const cards = document.querySelector("#hotelLobby");

hotels.forEach((hotel) => {
  const mySection = document.createElement("section");
  mySection.classList.add("hotel-card"); // Add class for styling

  const theImage = document.createElement("img");
  theImage.src = `images/${hotel.photo}`;
  theImage.alt = `Located in ${hotel.location}`;

  const theName = document.createElement("h2");
  theName.textContent = hotel.name;

  const theLocation = document.createElement("p");
  theLocation.className = "location";
  theLocation.textContent = hotel.location; // Just a string, no indexing needed

  const theNumber = document.createElement("p");
  theNumber.textContent = hotel.phone;

  // Append elements to section
  mySection.appendChild(theImage);
  mySection.appendChild(theName);
  mySection.appendChild(theLocation);
  mySection.appendChild(theNumber);

  // Append section to the page
  cards.appendChild(mySection);
});
