import {
  noteStorage
} from "./Storage";

// Helper
export const $ = selector => document.querySelector(selector)

export const domElements = {
  addNoteInput: $("#add-task-input"),
  addNoteButton: $("#add-task-button"),
  noteContainer: $("#tasks"),
  noteDiv: null
}

export const renderNotes = notes => {
  domElements.noteContainer.innerHTML = notes
    .map((note, index) => {
      return `
        <div class="note col-lg-3 col-md-4 col-sm-12 p-3 text-center h4" id="${index}">
          <div class="inner-wrapper pt-5 p-3">
            ${note}
          </div>
        </div>
      `
    })
    .join("")

  domElements.noteDiv = document.querySelectorAll(".note")
  targetNotes()
}

const targetNotes = () => {
  if (domElements.noteDiv !== null) {
    domElements.noteDiv.forEach(oneDiv => {
      oneDiv.addEventListener('click', () => {
        console.log(oneDiv.id)
        noteStorage.emit("removeItem", oneDiv.id)
      })
    });
  }
}