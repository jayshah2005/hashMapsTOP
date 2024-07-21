import LinkedList from "../linkedList/LinkedList";

export default class HashMap{

    map
    capacity
    load_factor
    size

    constructor(){
        this.map = []
        this.load_factor = 0.75;
        this.capacity = 16
        this.size = 0;
    }

    set(key, value){

        let secret = this.hash(key)

        if(this.map[secret] == undefined) {
            this.map[secret] = new LinkedList();
        }

        if(this.capacity*this.load_factor <= this.size) {
            this.refactor();
            this.set(key, value)
        }
        else {
            this.map[secret].append(key, value)
            this.size++;
        }
        
        
    }

    has(key){
        let bucket = this.map[this.hash(key)]

        return bucket.contains(key)
    }

    get(key) {
        let bucket = this.map[this.hash(key)]

        return bucket.find(key).value
    }

    remove(key) {
        let bucket = this.map[this.hash(key)]

        return bucket.remove(key);
    }

    length() {
        return this.size;
    }

    clear() {
        this.map = []
    }

    keys() {

        let keys = []


        this.map.forEach((linkedList) => {
            let p = linkedList.head

            while(p != null) {
                
                keys.push(p.key)
            
            p = p.next
            }
            
        })

        return keys
    }

    val() {
        let vals = []


        this.map.forEach((linkedList) => {
            let p = linkedList.head

            while(p != null) {
                
                vals.push(p.value)
            
                p = p.next
            }
            
        })

        return vals
    }

    entries() {
        let pairs = []


        this.map.forEach((linkedList) => {
            let p = linkedList.head

            while(p != null) {
                
                pairs.push([p.key, p.value])
            
                p = p.next
            }
            
        })

        return pairs
    }

    refactor() {
        this.capacity = this.capacity * 2;

        let temp_hash = this.map

        this.size = 0;
        this.map = []

        temp_hash.forEach((linkedList) => {
            let p = linkedList.head

            while(p != null) {
                
                let key = p.key
                let value = p.value
                
                this.set(key, value)

                p = p.next
            }

        })
    }


    hash(key) {
        let hashCode = 0;
        
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }
     
        return hashCode;
    }

}