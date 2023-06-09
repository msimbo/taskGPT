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

/**
 * This handler generates and display the task
 */
taskPromptTextEl.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const userInput = taskPromptTextEl.value;
    taskPromptTextEl.value = "";

    // core business/logic Model
    const generatedPlan = generateTask(); // Data Structure {Array}

    // view logic
    showGeneratedPlan(generatedPlan);
  }
});

/**
 * Generates a response based on user input/prompt
 *
 * @param {string} prompt
 * @returns {Array}
 */
function generateTask(
  prompt = "generate a day plan based on the pomodoro technique"
) {
  // use OpenAI to generate a plan based on a prod. method
  const generateResponseFromAPI = getGPTReponseData(prompt); // Array

  // return the data to the caller...
  return generateResponseFromAPI;
}

/**
 * Gets the GPT from OpenAI's backend
 *
 * @param {string} prompt
 * @returns {Array}
 */
function getGPTReponseData(prompt) {
  // some GPT things returns a response
  return [
    "Certainly! The Pomodoro Technique is a time management method that uses a timer to break work into intervals, typically 25 minutes in length, separated by short breaks. Here's an example of a day plan based on the Pomodoro Technique:",
    "<p>Morning Routine (30 minutes)</p><ul><li>Start the day with a brief meditation or stretching session (5 minutes)</li><li>Review your goals and plan for the day (5 minutes)</li><li>Enjoy a healthy breakfast (15 minutes)</li><li>Check and respond to urgent emails or messages (5 minutes)</li></ul>",
    "<p>Pomodoro Work Session 1 (25 minutes)</p><ul><li>Choose a task or project to focus on</li><li>Set a timer for 25 minutes and work on the task without any distractions</li><li>Take a short break (5 minutes) after completing the session</li></ul>",
    "<p>Morning Routine (30 minutes)</p><ul><li>Start the day with a brief meditation or stretching session (5 minutes)</li><li>Review your goals and plan for the day (5 minutes)</li><li>Enjoy a healthy breakfast (15 minutes)</li><li>Check and respond to urgent emails or messages (5 minutes)</li></ul>",
    "<p>Pomodoro Work Session 1 (25 minutes)</p><ul><li>Choose a task or project to focus on</li><li>Set a timer for 25 minutes and work on the task without any distractions</li><li>Take a short break (5 minutes) after completing the session</li></ul>",

    "<p>Morning Routine (30 minutes)</p><ul><li>Start the day with a brief meditation or stretching session (5 minutes)</li><li>Review your goals and plan for the day (5 minutes)</li><li>Enjoy a healthy breakfast (15 minutes)</li><li>Check and respond to urgent emails or messages (5 minutes)</li></ul>",
    "<p>Pomodoro Work Session 1 (25 minutes)</p><ul><li>Choose a task or project to focus on</li><li>Set a timer for 25 minutes and work on the task without any distractions</li><li>Take a short break (5 minutes) after completing the session</li></ul>",

    "<p>Morning Routine (30 minutes)</p><ul><li>Start the day with a brief meditation or stretching session (5 minutes)</li><li>Review your goals and plan for the day (5 minutes)</li><li>Enjoy a healthy breakfast (15 minutes)</li><li>Check and respond to urgent emails or messages (5 minutes)</li></ul>",
    "<p>Pomodoro Work Session 1 (25 minutes)</p><ul><li>Choose a task or project to focus on</li><li>Set a timer for 25 minutes and work on the task without any distractions</li><li>Take a short break (5 minutes) after completing the session</li></ul>",

    "Remember to adjust the timings and number of work sessions based on your personal preferences and energy levels. The Pomodoro Technique can help you maintain focus and productivity throughout the day while ensuring you take regular breaks to recharge.",
  ];
}

// Mock a function
function showGeneratedPlan(generatedPlanInput) {
  console.log(generatedPlanInput);

  // console.log(generatedPlanInput.length === 0);

  // let index;
  // (generatedPlanInput.length < index)
  // index++ // 2

  // for(let index; generatedPlanInput.length < index; index++){
  //     console.log('hello')
  // }

  generatedPlanInput.forEach((item) => displayContent(item));

  // taskPromptResultEl.innerHTML = `
  //   <!-- start: second section-->
  //       <div class="p-6">
  //         <p class="text-4xl">Here's your plan based on ${type} technique</p>
  //       </div>
  //       <!-- end: second section-->

  //       <!-- start: 3rd section -->
  //       <div class="p-6 bg-gray-200">
  //         <p>
  //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
  //           similique beatae maxime quo, voluptas molestiae!
  //         </p>
  //         <div class="section-btn">
  //           <p>generate full thingas to do.</p>
  //         </div>
  //         <div class="section-btn">
  //           <p>suggest something</p>
  //         </div>

  //         <div class="section-btn flex">
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke-width="1.5"
  //             stroke="currentColor"
  //             class="w-6 h-6"
  //           >
  //             <path
  //               stroke-linecap="round"
  //               stroke-linejoin="round"
  //               d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
  //             />
  //           </svg>
  //           <p>Generate another variant</p>
  //         </div>
  //         <!-- section navigation -->
  //         <!-- block-level e.g div, p, img, etc. -->
  //         <div class="flex justify-between">
  //           <div class="flex">
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               stroke-width="1.5"
  //               stroke="currentColor"
  //               class="w-6 h-6"
  //             >
  //               <path
  //                 stroke-linecap="round"
  //                 stroke-linejoin="round"
  //                 d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  //               />
  //             </svg>
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               stroke-width="1.5"
  //               stroke="currentColor"
  //               class="w-6 h-6"
  //             >
  //               <path
  //                 stroke-linecap="round"
  //                 stroke-linejoin="round"
  //                 d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  //               />
  //             </svg>
  //           </div>
  //           <!-- inline-level -->
  //           <strong>1/2</strong>
  //         </div>
  //       </div>
  //       <!-- end: 3rd section -->
  //   `;
}
// console.log( "1" + "1" ); // 11
// console.log( 1 + 1 ); // 2

function displayContent(aDisplayItem, showResultDOM = taskPromptResultEl) {
  // @TODO:
  showResultDOM.innerHTML += `${aDisplayItem}`; // YES!!!!
  console.log(aDisplayItem);
}
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
