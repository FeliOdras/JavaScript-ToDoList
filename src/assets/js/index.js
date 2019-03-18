import "@scss/styles.scss"

// Helper
const $ = (selector) => document.querySelector(selector);

const addNoteInput = $('#add-note');
const addNoteButton = $('#add-note-button');
const noteContainer = $('#notes')

addNoteButton.addEventListener('click', e => {
    const note = addNoteInput.value;
    localStorage.setItem('Note', note)
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