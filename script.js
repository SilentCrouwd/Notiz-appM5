const noteListEl = document.querySelector(".note-List");

const headlineEl = document.getElementById("input-Headline-Note");
const noteContentEl = document.getElementById("input-Note-Content");

const saveBtn = document.querySelector(".btn-Save");
const deleteBtn = document.querySelector(".btn-Del");

saveBtn.addEventListener("click", createNote);
deleteBtn.addEventListener("click", delNotes);

function showNotes(notesArray) {
  if (notesArray.length > 2) {
    notesArray.sort(
      (a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated),
    );
  }
  let html = "";

  notesArray.forEach((note) => {
    html += `
    
    
          <div class="note-Card" data-id="${note.id}">
            <h2 class="card-Headline">${note.title}
            </h2>
            <p class="card-Text">${note.content}
            </p>
            <p class="card-Timestomp">${new Date(note.lastUpdated).toLocaleString("de-De")}</p>
          </div>
    
    
    `;
  });
  noteListEl.innerHTML = html;
}

function createNote() {
  const title = headlineEl.value;
  const content = noteContentEl.value;
  if (!content || !title) {
    alert("Bitte Titel und Inhalt eingeben");
    return;
  } else {
    let newNoteObj = {
      title: headlineEl.value,
      content: noteContentEl.value,
      id: getId(),
      lastUpdated: new Date().getTime(),
    };
    notesData.push(newNoteObj);
    showNotes(notesData);
    setLocalStorage();
  }
}

function delNotes() {
  notesData = [];
  setLocalStorage();
  showNotes(notesData);
}

function getId() {
  const notes = notesData;

  const sortedNotes = notes.sort((a, b) => a.id - b.id);
  let nextId = 1;
  for (let note of sortedNotes) {
    if (nextId < note.id) break;
    nextId = note.id + 1;
  }
  return nextId;
}

showNotes(notesData);
