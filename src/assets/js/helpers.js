import { noteStorage } from "./Storage";

// Helper
export const $ = selector => document.querySelector(selector);

export const domElements = {
  addNoteInput: $("#add-task-input"),
  addNoteButton: $("#add-task-button"),
  noteContainer: $("#tasks"),
  noteDiv: null
};

export const renderNotes = notes => {
  domElements.noteContainer.innerHTML = notes
    .map((note, index) => {
      return `
        <div class="note col-lg-3 col-md-4 col-sm-12 p-3 text-center h4" id="${index}">
        <div class="pin"></div>
          <div class="inner-wrapper pt-5 p-3">
          ${index + 1}.
            ${note}<br>
            <button class="task-finished small mt-3">Finished!</button>
          </div>
        </div>
      `;
    })
    .join("");

  domElements.taskFinished = document.querySelectorAll(".task-finished");
  targetNotes();
};

const targetNotes = () => {
  if (domElements.taskFinished !== null) {
    domElements.taskFinished.forEach(oneDiv => {
      oneDiv.addEventListener("click", () => {
        noteStorage.emit("removeItem", oneDiv.id);
      });
    });
  }
};
