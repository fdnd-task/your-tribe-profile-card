function expand() {
  const cardTwo = document.getElementById("card-two");
  const cardContainer = document.querySelector(".card-container");

  cardTwo.classList.toggle('visible');

  if(cardTwo.classList.contains('visible')) {
    cardTwo.style.display = "block";
    cardContainer.classList.add("expanded");
  } else {
    cardTwo.style.display = "none";
    cardContainer.classList.remove("expanded");
  }

}