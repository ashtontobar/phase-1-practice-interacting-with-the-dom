document.addEventListener("DOMContentLoaded", () => {
  // Define Variables
  const timerDisplay = document.querySelector("#counter");
  const plusButton = document.querySelector("#plus");
  const minusButton = document.querySelector("#minus");
  const heartButton = document.querySelector("#heart");
  const pauseButton = document.querySelector("#pause");
  const submitButton = document.querySelector("#submit");
  const form = document.querySelector("#comment-form");
  let formInput = document.querySelector("#comment-input");

  let intervalID = window.setInterval(initiateCounter, 1000);

  // Timer // ✔️
  function initiateCounter() {
    timerDisplay.textContent++;
  }

  // Plus button increments //  ✔️
  plusButton.addEventListener("click", () => timerDisplay.textContent++);

  // Minus button decrements // ✔️
  minusButton.addEventListener("click", () => timerDisplay.textContent--);

  // Heart Button Likes - *PARTIALLY WORKING - NEED THE NUMBER OF TIMES IT WAS LIKED*
  heartButton.addEventListener("click", () => {
    const likesList = document.querySelector(".likes");
    const newLike = document.createElement("li");

    // *** THE LINE BELOW NEEDS TO BE UPDATED *** 🔴
    newLike.textContent = `${timerDisplay.textContent} has been liked ${newLike.value} times`;
    likesList.append(newLike);
  });

  // Pause Button // 🔴 Partially working (the timer does not start after resuming)
  pauseButton.addEventListener("click", (e) => {
    if (e.target.textContent === "pause") {
      // Disables all buttons
      clearInterval(intervalID);
      plusButton.disabled = true;
      minusButton.disabled = true;
      heartButton.disabled = true;
      submitButton.disabled = true;
      pauseButton.textContent = "resume";
    } else {
      pauseButton.textContent = "pause";
      plusButton.disabled = false;
      minusButton.disabled = false;
      heartButton.disabled = false;
      submitButton.disabled = false;
    }
  });

  // Comments // ✔️
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const commentSection = document.querySelector("#list");
    const comment = document.createElement("li");
    commentSection.append(comment);

    comment.textContent = formInput.value;
    form.reset();
  });
});
