// addeventlistener on "domContentLoaded"? must google to see if correct form
// also figure out if we can turn this into a class

const debrisPage = document.querySelector("#debris-form");
const createNew = document.querySelector("#createNew");
const checkedToday = document.querySelector("#checkboxTodaysDate");
const today = new Date().toISOString().slice(0, 10);
//console.log(`${today} is a date in ${typeof(today)} format`);

let counter = 0;

createNew.addEventListener("click", () => {
  counter++;

  let newDebrisField = document.createElement("li");
  newDebrisField.setAttribute("class", "fieldLI");
  let newDebrisLabel = document.createElement("label");
  newDebrisLabel.textContent = `Debris ${counter}`;

  let deleteBtn = document.createElement("button");
  //deleteBtn.setAttribute("for", field);
  deleteBtn.setAttribute("class", "btn btn-outline-light");
  deleteBtn.setAttribute("type", "button");
  deleteBtn.textContent = "x";

  let newDebrisSubfield = document.createElement("ul");
  let newDebrisLI = document.createElement("li");

  let newDebrisForm = document.createElement("form");
  newDebrisForm.setAttribute("method", "post");
  newDebrisForm.setAttribute("action", "submit.php");

  let debrisType = document.createElement("input");
  debrisType.setAttribute("type", "text");
  debrisType.setAttribute("name", "debrisType");
  debrisType.setAttribute("placeholder", "Type of Debris");

  let debrisWeight = document.createElement("input");
  debrisWeight.setAttribute("type", "number");
  debrisWeight.setAttribute("name", "debrisWeight");
  debrisWeight.setAttribute("placeholder", "Weight");

  let debrisDate = document.createElement("input");
  debrisDate.setAttribute("type", "date");
  debrisDate.setAttribute("name", "debrisDate");
  if(checkedToday.checked) {
    debrisDate.setAttribute("value", today);
  }
  
  debrisPage.appendChild(newDebrisField);
  newDebrisField.appendChild(newDebrisForm);
  newDebrisForm.appendChild(newDebrisLabel);
  newDebrisForm.appendChild(deleteBtn);

  newDebrisField.appendChild(newDebrisSubfield);
  newDebrisSubfield.appendChild(newDebrisLI);
  newDebrisLI.appendChild(debrisType);
  newDebrisLI.appendChild(debrisWeight);
  newDebrisLI.appendChild(debrisDate);


})

//https://davidwalsh.name/event-delegate
debrisPage.addEventListener("click", (e) => {    // event bubbling from parent down into target
    if(e.target && e.target.getAttribute("class") === "btn btn-outline-light"){
      e.target.parentNode.parentNode.remove();
    };
  })