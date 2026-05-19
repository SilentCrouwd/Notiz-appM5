const noteListEl = document.querySelector(".note-List");

const notesData = [
  {
    title: "Notiz 1",
    content: "Lorem Ipsum",
    id: 1,
    lastUpdated: new Date().getTime(),
  },
  {
    title: "Notiz 2",
    content: "Lorem Ipsum",
    id: 2,
    lastUpdated: new Date().getTime(),
  },
  {
    title: "Notiz 3",
    content: "Lorem Ipsum",
    id: 3,
    lastUpdated: new Date().getTime(),
  },
];

function showNotes(notesArray) {
  notesArray.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
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
  //   notesArray.forEach((element) => {
  //     const noteListEl = document.querySelector(".note-List");

  //     const newCard = document.createElement("div");
  //     newCard.classList.add("note-Card");

  //     const newCardHeadline = document.createElement("h2");
  //     newCardHeadline.innerHTML = element.title;
  //     newCard.appendChild(newCardHeadline);
  //     newCardHeadline.classList.add("card-Headline");

  //     const newCardText = document.createElement("p");
  //     newCardText.innerHTML = element.content;
  //     newCard.appendChild(newCardText);
  //     newCardText.classList.add("card-Text");

  //     const newCardTimestomp = document.createElement("p");
  //     newCardTimestomp.innerHTML = element.lastUpdated;
  //     newCard.appendChild(newCardTimestomp);
  //     newCardTimestomp.classList.add("card-Timestomp");

  //     noteListEl.appendChild(newCard);
  //   });
}

showNotes(notesData);
