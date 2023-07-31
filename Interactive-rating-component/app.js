const rating_buttons = document.querySelectorAll(".button");
const submit_button = document.querySelector(".submit");
const rate_value = document.getElementById("rate");
const rating_card = document.querySelector(".rating-card");
const thankyou_card = document.querySelector(".thankyou-card");
let rating = null;

rating_buttons.forEach((rating_button) => {
  rating_button.addEventListener("click", function handleClick(event) {
    const active = document.querySelector(".selected_button");
    if (active) {
      active.classList.remove("selected_button");
    }
    event.target.classList.add("selected_button");
    rating = event.target.innerText;
  });
});

submit_button.addEventListener("click", () => {
  if (rating) {
    rate_value.innerText = rating;
    rating_card.classList.add("hidden");
    thankyou_card.classList.remove("hidden");
  }
});
