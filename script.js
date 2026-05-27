const noteListEl = document.querySelector(".note-List");
const headlineEl = document.getElementById("input-Headline-Note");
const noteContentEl = document.getElementById("input-Note-Content");
const saveBtn = document.querySelector(".btn-Save");
const deleteBtn = document.querySelector(".btn-Del");
const createNewNoteBtn = document.getElementById("add-Note");
showNotes(getLocalStorage());

createNewNoteBtn.addEventListener("click", createNewNote);
saveBtn.addEventListener("click", saveNewNote);

deleteBtn.addEventListener("click", delNotes);


// todo
// 1 arrays für 2 kathegrries
// arrays im local speichern
// auswahl für Sidebar welche kathegorie angezeigt wird 
// 




function saveNewNote() {
  const title = headlineEl.value;
  const content = noteContentEl.value;
  let currId = undefined;

  // if (title.includes("<") || title.includes(">")) {
  //   alert("Ungültige Zeichen");
  //   return;
  // } else if (content.includes("<") || content.includes(">")) {
  //   alert("Ungültige Zeichen");
  //   return;
  // }
  // else

  if (!content || !title) {
    alert("Bitte Titel und Inhalt eingeben");
    return;
  } else {
    const currSelectedNoteEl = document.querySelector(".selected-Card");
    if (currSelectedNoteEl) {
      currId = currSelectedNoteEl.getAttribute("data-id");
    }
    createNote(title, content, Number(currId));
  }
}

function showNotes(notesArray) {
  notesArray.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));

  let html = "";

  notesArray.forEach((note) => {
    html += `
    
    
          <div class="note-Card" data-id="${note.id}">
            <h2 class="card-Headline">${escapeHtml(note.title)}
            </h2>
            <p class="card-Text">${escapeHtml(note.content)}
            </p>
            <p class="card-Timestomp">${new Date(note.lastUpdated).toLocaleString("de-De")}</p>
          </div>
    
    
    `;
  });
  noteListEl.innerHTML = html;
  setListeners();
}

function createNote(title, content, id = undefined) {
  if (id) {
    const indexOfNoteWithId = notesData.findIndex((note) => note.id === id);
    if (indexOfNoteWithId > -1) {
      notesData[indexOfNoteWithId] = {
        title,
        content,
        id,
        lastUpdated: new Date().getTime(),
      };
      setLocalStorage();
      showNotes(notesData);
    }
  } else {
    let newNoteObj = {
      title,
      content,
      id: getId(),
      lastUpdated: new Date().getTime(),
    };

    notesData.push(newNoteObj);

    showNotes(notesData);
    setLocalStorage();

    headlineEl.value = "";
    noteContentEl.value = "";
  }
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
function selectNote(id) {
  const selectedNoteEl = document.querySelector(`.note-Card[data-id="${id}"]`);
  if (selectedNoteEl.classList.contains("selected-Card")) return;

  const noteEntriesEl = document.querySelectorAll(".note-Card");
  noteEntriesEl.forEach((note) => {
    note.classList.remove("selected-Card");
  });

  selectedNoteEl.classList.add("selected-Card");
}
function setListeners() {
  const noteCard = document.querySelectorAll(".note-Card");
  noteCard.forEach((cardEl) => {
    cardEl.addEventListener("click", () => {
      selectNote(cardEl.getAttribute("data-id"));
      const selectedHeadline = cardEl.querySelector(".card-Headline").innerHTML;
      headlineEl.value = selectedHeadline;
      const selectedContent = cardEl.querySelector(".card-Text").innerHTML;
      noteContentEl.value = selectedContent;
    });
  });
}

function createNewNote() {
  headlineEl.value = "";
  noteContentEl.value = "";
  const noteEntriesEl = document.querySelectorAll(".note-Card");
  noteEntriesEl.forEach((note) => {
    note.classList.remove("selected-Card");
  });
}
function delNotes() {
  const notes = getLocalStorage();
  const deleteObjEl = document.querySelector(".selected-Card");
  if (deleteObjEl) {
    currId = deleteObjEl.getAttribute("data-id");
    const filterNote = notes.filter((note) => note.id != Number(currId));
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filterNote));
    deleteObjEl.classList.remove("selected-Card");

    showNotes(getLocalStorage());
    headlineEl.value = "";
    noteContentEl.value = "";
  }
}
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
renderQuote();
function randomIndex() {
  let index = Math.floor(Math.random() * quotes.length);
  return index;
}
function randomizeQuote(originArray) {
  let randomQuote = originArray[randomIndex()];
  return randomQuote;
}
function renderQuote() {
  let newQuoteEl = randomizeQuote(quotes);
  const quoteContainer = document.querySelector(".footer-Container");
  let html = "";
  html = `          <p class="footer-headline">Zitat:</p>
          <p class="footer-quote">
     ${newQuoteEl.quote}
          </p>
          <p class="quote-date">${newQuoteEl.date}</p>`;

  quoteContainer.innerHTML = html;
}
