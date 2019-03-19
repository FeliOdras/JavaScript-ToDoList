// Helper
export const $ = selector => document.querySelector(selector)

export const domElements = {
  addNoteInput: $("#add-note"),
  addNoteButton: $("#add-note-button"),
  noteContainer: $("#notes")
}

export const renderNotes = notes => {
  domElements.noteContainer.innerHTML = notes
    .map((note, index) => {
      return `
        <div class="note col-lg-4" id="note-${index}">
          ${note}
        </div>
      `
    })
    .join("")

  targetNotes()
}


const targetNotes = () => {
  const noteDiv = document.querySelectorAll('.note');
  if (noteDiv !== null) {
    noteDiv.forEach(oneDiv => {
      oneDiv.addEventListener('click', () => {
        console.log(`Clicked div ${oneDiv.id}`)
      })
    });
  }
}