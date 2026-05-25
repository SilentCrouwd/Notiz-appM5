let notesData = [];
const LOCAL_STORAGE_KEY = "savedNotes";

function setLocalStorage() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notesData));
}
function getLocalStorage() {
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);

  notesData = savedData ? JSON.parse(savedData) : [];

  return notesData;
}
