import Node from './Node'

export default class LinkedList{

    head;
    size;

    constructor(){
        this.size = 0;
        this.head = null
    }

    append(key, value) {
        this.head = new Node(key, value)
    }

    contains(key){
        let p = this.head;

        while(p != null) {
            
            if(p.key === key) return true

            p = p.next
        }

        return false;
    }

    find(key){
        let p = this.head;

        while(p != null) {
            
            if(p.key === key) return p;

            p = p.next
        }

        return null
    }

    remove(key){
        let p = this.head;

        if(p == null) return false

        if(p.key === key) head = null;

        while(p.next != null) {
            
            if(p.next.key === key) {
                let val = p.next

                p.next = p.next.next

                return true;
            }

            p = p.next
        }

        return false
    }

}