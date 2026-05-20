let notesData = [];

getLocalStorage();

function setLocalStorage() {
  localStorage.setItem("savedNotes", JSON.stringify(notesData));
}
function getLocalStorage() {
  if (localStorage.getItem("savedNotes"))
    notesData = JSON.parse(localStorage.getItem("savedNotes"));
}
