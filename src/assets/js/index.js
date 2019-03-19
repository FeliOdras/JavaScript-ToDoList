import "@scss/styles.scss"

import {
    noteStorage
} from "./Storage"

import {
    domElements
} from "./helpers"

const {
    addNoteButton,
    addNoteInput,
    noteDiv,
} = domElements
console.log(domElements)

addNoteButton.addEventListener("click", () => {
    const note = addNoteInput.value
    if (note) {
        noteStorage.emit("addItem", note)
        addNoteInput.value = ""
    }
})