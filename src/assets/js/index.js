import "@scss/styles.scss"
import Storage from "./Storage"

const noteStorage = new Storage("myAwesomeNote")

// Helper
const $ = (selector) => document.querySelector(selector);

const addNoteInput = $('#add-note');
const addNoteButton = $('#add-note-button');
const noteContainer = $('#notes')

addNoteButton.addEventListener('click', e => {
    const note = addNoteInput.value;
    noteStorage.save(note)
    renderNotes(note);
})

const renderNotes = note => {
    const templateOfNotes = `
    <div class="col-md-4 col-sm-12 note">
        ${note}
    </div>
    `
    noteContainer.innerHTML = templateOfNotes;
}

renderNotes(noteStorage.get());