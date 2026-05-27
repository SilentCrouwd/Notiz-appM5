let notesData = [];
let notesWork = [];

const LOCAL_STORAGE_KEY = "savedNotes";

function setLocalStorage() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notesData));
}
function getLocalStorage() {
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);

  notesData = savedData ? JSON.parse(savedData) : [];

  return notesData;
}

const quotes = [
  {
    quote: "Gib jedem Tag die Chance, der schönste deines Lebens zu werden.",
    date: " Mark Twain (ca. 1890)",
  },
  {
    quote: "Die beste Freude ist die Freude an anderen.",
    date: "François de La Rochefoucauld 1665",
  },
  {
    quote:
      "Wir denken selten an das, was wir haben, aber immer an das, was uns fehlt.",
    date: "Arthur Schopenhauer 1851",
  },
  {
    quote:
      "Das Glück deines Lebens hängt von der Beschaffenheit deiner Gedanken ab.",
    date: "Mark Aurel (ca. 170 n. Chr.)",
  },
  {
    quote: "Es gibt überall Blumen für den, der sie sehen will.",
    date: "Henri Matisse 1947",
  },
  {
    quote: "Nichts in der Welt ist so ansteckend wie Lachen und gute Laune.",
    date: "Charles Dickens 1843",
  },
  {
    quote:
      "Wende dein Gesicht der Sonne zu, dann fallen die Schatten hinter dich.",
    date: "Maori (dokumentiert um 1910)",
  },
  {
    quote: "Die Zukunft hängt davon ab, was wir heute tun.",
    date: "Mahatma Gandhi 1931",
  },
];
