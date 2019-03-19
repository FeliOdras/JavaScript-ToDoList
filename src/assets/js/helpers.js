// Helper
export const $ = selector => document.querySelector(selector)

export const domElements = {
  addNoteInput: $("#add-note"),
  addNoteButton: $("#add-note-button"),
  noteContainer: $("#notes")
}

export const renderNotes = notes => {
  domElements.noteContainer.innerHTML = notes
    .map((note, key) => {
      return `
        <div class="note col-lg-4" id="note-${key}">
          ${note}
        </div>
      `
    })
    .join("")
}