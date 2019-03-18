import "@scss/styles.scss"
import Storage from "./Storage"

const noteStorage = new Storage("myAwesomeNote");

// Helper
const $ = (selector) => document.querySelector(selector);

const addNoteInput = $('#add-note');
const addNoteButton = $('#add-note-button');
const noteContainer = $('#notes');

addNoteButton.addEventListener('click', e => {
    const note = addNoteInput.value;
    noteStorage.addDataSet(note);
    renderNotes(note);
})

const renderNotes = notes => {
    noteContainer.innerHTML = notes
        .map(note => {
            return `
                        <div class="col-md-4 col-sm-12 note">
                            ${note}
                        </div>
                        `
        }).join('')
}

renderNotes(noteStorage.get());