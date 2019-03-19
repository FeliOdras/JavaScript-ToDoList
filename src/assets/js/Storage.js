import Events from "./Events"

import {
    renderNotes
} from "./helpers"

export default class Storage extends Events {
    constructor(localStorageKey) {
        super()
        this.key = localStorageKey;
        this.data = this.get();
    }

    addDataSet(dataParam) {
        this.data.push(dataParam);
        this.emit('updated', this.data)
        this.save();
    }

    removeDataSet(dataParam) {
        console.log(`OK Remove key => ${dataParam}`)
    }

    save() {
        const data = this.data;
        const stringified = JSON.stringify(data);
        localStorage.setItem(this.key, stringified);
    }

    get() {
        const localStorageValue = localStorage.getItem(this.key);
        this.data = JSON.parse(localStorageValue) || [];
        this.emit('updated', this.data)
        return this.data;
    }

    initFinished() {
        this.emit("updated", this.data)
    }
}

export const noteStorage = new Storage("myAwesomeNote")

noteStorage.on("addItem", note => {
    noteStorage.addDataSet(note)
})

noteStorage.on("updated", notes => {
    renderNotes(notes)
})

noteStorage.on("removeItem", note => {
    noteStorage.removeDataSet(note)
})

noteStorage.initFinished()