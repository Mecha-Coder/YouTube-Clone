let focusState = false;

//-------------------| Left |----------------------
const hamberger = document.getElementById("hamberger");
const logo = document.getElementById("youtube-logo");
const back = document.getElementById("back");

//-----------------| Center |----------------------

const centerHeader = document.getElementById("header-center");
const inputText = document.getElementById("input");
const clearText = document.getElementById("del");
const searchBar = document.getElementById("searchbar");
const microphone = document.getElementById("microphone");

//-----------------| Right |----------------------

const magGlass = document.getElementById("mag-glass");
const mic = document.getElementById("mic");
const dots = document.getElementById("dots");
const signIn = document.getElementById("sign-in");

// Display "X" icon when there is text inside the searchbox
inputText.addEventListener("keyup", () => {
  CheckInput();
});

// Clear all text inside searchbox
clearText.addEventListener("click", () => {
  inputText.value = "";
  CheckInput();
  inputText.focus();
});

// Small screen: When click unhide header-center
magGlass.addEventListener("click", () => {
  SearchFocus(true);
});

document.addEventListener("click", (event) => {
  let getFocus = document.activeElement.getAttribute("id");
  if (focusState && getFocus !== "input") {
    SearchFocus(false);
  }
});

// Script --------------------------------------------------------

function CheckInput() {
  if (inputText.value !== "") {
    searchBar.style.paddingRight = "0px";
    clearText.style.display = "flex";
  } else {
    searchBar.style.paddingRight = "4px";
    clearText.style.display = "none";
  }
}

function SearchFocus(state) {
  let a, b;
  focusState = state;

  if (state) {
    a = "hide";
    b = "show";
  } else {
    a = "show";
    b = "hide";
  }

  back.classList.remove(a);
  back.classList.add(b);

  centerHeader.classList.remove(a);
  centerHeader.classList.add(b);
  //--
  logo.classList.add(a);
  logo.classList.remove(b);

  hamberger.classList.add(a);
  hamberger.classList.remove(b);

  microphone.classList.add(a);
  microphone.classList.remove(b);

  magGlass.classList.add(a);
  magGlass.classList.remove(b);

  dots.classList.add(a);
  dots.classList.remove(b);

  signIn.classList.add(a);
  signIn.classList.remove(b);

  if (state) {
    inputText.focus();
  }
}

// --------------------------------- drag ---------------------

let mouseDown = false;
let startX, scrollLeft;
const slider = document.getElementById("sub-header");
const previousContainer = document.getElementById("previous-container");
const nextContainer = document.getElementById("next-container");

const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");

const startDragging = (e) => {
  mouseDown = true;
  startX = e.pageX;
  scrollLeft = slider.scrollLeft;
};

const stopDragging = (e) => {
  mouseDown = false;
};

const move = (e) => {
  if (mouseDown) {
    const scroll = e.pageX - startX;
    slider.scrollLeft = scrollLeft - scroll;
  }

  const i = slider.scrollWidth - slider.clientWidth;

  if (slider.scrollLeft === i) {
    nextContainer.classList.remove("show");
    nextContainer.classList.add("hide");
  } else {
    nextContainer.classList.remove("hide");
    nextContainer.classList.add("show");
  }

  if (slider.scrollLeft === 0) {
    previousContainer.classList.remove("show");
    previousContainer.classList.add("hide");
  } else {
    previousContainer.classList.remove("hide");
    previousContainer.classList.add("show");
  }
};

// Add the event listeners
slider.addEventListener("mousemove", move, false);
slider.addEventListener("mousedown", startDragging, false);
slider.addEventListener("mouseup", stopDragging, false);
slider.addEventListener("mouseleave", stopDragging, false);

previousButton.addEventListener("click", () => {
  if (slider.scrollLeft < 300) {
    slider.scrollLeft = 0;
    previousContainer.classList.remove("show");
    previousContainer.classList.add("hide");
  } else {
    slider.scrollLeft += -300;
  }

  if (slider.scrollLeft !== 0) {
    nextContainer.classList.add("show");
    nextContainer.classList.remove("hide");
  }
});

nextButton.addEventListener("click", () => {
  const i = slider.scrollWidth - slider.clientWidth;

  if (slider.scrollLeft > i - 300) {
    slider.scrollLeft = i;
    nextContainer.classList.remove("show");
    nextContainer.classList.add("hide");
  } else {
    slider.scrollLeft += +300;
  }

  if (slider.scrollLeft === 0) {
    previousContainer.classList.add("show");
    previousContainer.classList.remove("hide");
  }
});
