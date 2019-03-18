import "@scss/styles.scss"

// Helper
const $ = (selector) => document.querySelector(selector);

const addNoteInput = $('#add-note');
const addNoteButton = $('#add-note-button');

addNoteButton.addEventListener('click', e => {
    console.log('hey hey hey');
})

console.log(addNoteInput, addNoteButton);