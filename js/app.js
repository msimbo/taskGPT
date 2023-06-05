// Variables
const pomoBtn = document.getElementById("pomo-btn"); // object
const matrixBtn = document.getElementById("matrix-btn"); //object
const ztdBtn = document.getElementById("ztd-btn"); //object
const gtdBtn = document.getElementById("gtd-btn"); //object
const esBtn = document.getElementById("es-btn"); //object
const taskType = document.getElementById("task-type");
const resetBtnEl = document.getElementById("reset-btn");

// define variable
const taskPromptTextEl = document.getElementById("task-prompt");
const taskPromptResultEl = document.getElementById("task-prompt-result");

// PS:
// when I click the :start over: btn
resetBtnEl.addEventListener("click", () => resetPage());

function resetPage() {
  // set the value of the web view to nothing
  taskPromptResultEl.innerHTML = "";
  // set the content of the textarea to nothing
  taskPromptTextEl.value = "";
}
// ( parameter
function generateTask(type = "Pomodoro") {
  // let type = "default_task";
  // type = "default"
  // console.log(`you are using the ${type} technique... generating`);
  taskPromptResultEl.innerHTML = `
    <!-- start: second section-->
        <div class="p-6">
          <p class="text-4xl">Here's your plan based on ${type} technique</p>
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
}
// taskType.addEventListener("change", (event) => {
//   if (event.key === "ArrowUp") showBird();
//   if (event.key === "ArrowDown") showConfetti();
//   if (event.key === "Meta") shutDownGame();
// });

// an alternative
// taskType.addEventListener("change", () => updateResult());

// === text prompt
taskPromptTextEl.addEventListener("keydown", function (event) {
  //   console.log("this works on loosing focus");
  //   console.log(taskPromptResultEl);
  // console.log(event.key);
  // console.log(event.key === "Enter");

  // if (event.key === "Enter") console.log("Run onenter pressed");
  if (event.key === "Enter") {
    // get a value
    // console.log();
    const userInput = taskPromptTextEl.value;
    //@TODO: 1. make this show in the web view
    console.log(userInput);
    //    set a value
    taskPromptTextEl.value = "";

    generateTask(userInput);
  }
});

// task switcher
taskType.addEventListener("change", function (event) {
  // pseudocode --
  // if some selects "Pomodoro"
  // if (event.target.value === "Pomodoro") generateTask("Pomodoro"); // missing arguments
  // if (event.target.value === "ZTD") generateTask("ZTD");
  // if (event.target.value === "Matrix") generateTask("Matrix");

  //Another way?
  switch (event.target.value) {
    case "Pomodoro":
      generateTask("Pomodoro");
      break;
    case "ZTD":
      generateTask("ZTD");
      break;
    case "Matrix":
      generateTask("Matrix");
      break;
    default:
      generateTask();
      break;
  }
});

// const generatePomodoroTask = () =>
// console.log("you are using the PMD Technique... generating");
function generatePomodoroTask() {
  console.log("you are using the PMD Technique... generating");
}
function generateZTDTask() {
  console.log("you are using the ZTD Technique... generating");
}
// Matrix;
function generateMatrixTask() {
  console.log("you are using the  Technique... generating");
}
// Pomodoro
pomoBtn.addEventListener("click", function () {
  generateTask("Pomodoro");
});

// Matrix
matrixBtn.addEventListener("click", function () {
  generateTask("Matrix");
});

// random new
esBtn.addEventListener("click", function () {
  generateTask("abdendeidneide");
});

// ZTD
ztdBtn.addEventListener("click", function () {
  generateTask();
});

// GTD
gtdBtn.addEventListener("click", function () {
  generateTask("GTD");
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
