
let notesData = [];
const LOCAL_STORAGE_KEY = "savedNotes";

function setLocalStorage() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notesData));
}
function getLocalStorage() {
  if (localStorage.getItem(LOCAL_STORAGE_KEY) !== "")
    notesData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  return notesData;
}
