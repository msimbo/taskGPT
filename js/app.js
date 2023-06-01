// Variables
const pomoBtn = document.getElementById("pomo-btn"); // object
const matrixBtn = document.getElementById("matrix-btn"); //object
const ztdBtn = document.getElementById("ztd-btn"); //object
const gtdBtn = document.getElementById("gtd-btn"); //object

// define var
const taskPromptTextEl = document.getElementById("task-prompt");
const taskPromptResultEl = document.getElementById("task-prompt-result");

// // Events Handlers
// ==== text prompt
taskPromptTextEl.addEventListener("blur", function () {
  //   console.log("this works on loosing focus");

  //   console.log(taskPromptResultEl);

  taskPromptResultEl.innerHTML = `
  <!-- start: second section-->
      <div class="p-6">
        <p>what should i do today?</p>
      </div>
      <!-- end: second section-->

      <!-- start: 3rd section -->
      <div class="p-6 bg-gray-200">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          similique beatae maxime quo, voluptas molestiae!
        </p>
        <div class="section-btn">
          <p>generate full thingas to do.</p>
        </div>
        <div class="section-btn">
          <p>suggest something</p>
        </div>

        <div class="section-btn flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p>Generate another variant</p>
        </div>
        <!-- section navigation -->
        <!-- block-level e.g div, p, img, etc. -->
        <div class="flex justify-between">
          <div class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <!-- inline-level -->
          <strong>1/2</strong>
        </div>
      </div>
      <!-- end: 3rd section -->
  `;
});

// Pomodoro
pomoBtn.addEventListener("click", function () {
  console.log("You clicked the PMD Btn");
});

// Matrix
matrixBtn.addEventListener("click", function () {
  console.log("You clicked the Matrix Btn");
});

// ZTD
ztdBtn.addEventListener("click", function () {
  console.log("You clicked the ZTD Btn");
});

// GTD
gtdBtn.addEventListener("click", function () {
  console.log("You clicked the GTD Btn");
});

// C-style
// get that HTML section into JS

// const document =......pomoBtn..
//1. declared the variables we need

//2. watch for events on that variable, specifically a "click/tap"
// pomoBtn.addEventListener(
//   "click",

//   function () {}
// );

// console.log(pomoBtn);
// console.log(matrixBtn);

// console.log("deed")

// 1. define the problem
// 1a. when a user clicks one of my divs

// const myBtn = "stuff";
// "set" a "value"
// "get" a "value"

// taskPromptResultEl
//.innerHTML
//                              = "";

/// taskPromptTextEl.value = "ededededed"

// const myName = "Dele Tosh deedeed";
// const myPlace = "ULEM";
// const myNumOne = "1"; //string
// const myNumTwo = "2";

// const myNumberOne = 1; //number
// const myNumberTwo = 2;

// const isThisHere = true; //boolean
// const isItNotHere = false;

// const firstTotal = myNumOne + myNumTwo;
// const secondTotal = myNumberOne + myNumberTwo;

// const multiplyResult = myNumberOne * myNumberTwo;

// console.log(isThisHere);

// console.log(secondTotal);

// console.log(multiplyResult);

// console.log(myPlace);

// console.log(typeof isThisHere);
// console.log(typeof myNumTwo);
// console.log(typeof myNumberOne);

// console.log( myNumberOn)
// variable called "myBtn" that has "stuff"

// console.log(myPlace);
// console.log(myNumberOne);
// console.log(myPlace);
// console.log(myBtn);
// 1b i see a pop-up

// const newName = prompt("What is your name?");

// console.log(newName);

// console.log(typeof newName);
