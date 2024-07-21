export default class Node {

    key;
    value;
    next;
    
    constructor (key, value, next) {
        this.key = key,
        this.value = value,
        this.next = next;
    }
}