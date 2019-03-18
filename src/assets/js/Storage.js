export default class Storage {
    constructor(localStorageKey) {
        this.key = localStorageKey;
        this.data = this.get();
    }

    addDataSet(dataParam) {
        this.data.push(dataParam);
        this.save();
    }

    save() {
        const data = this.data;
        const stringified = JSON.stringify(data);
        localStorage.setItem(this.key, stringified);
    }

    get() {
        const localStorageValue = localStorage.getItem(this.key);
        this.data = JSON.parse(localStorageValue) || [];
        return this.data;
    }
}