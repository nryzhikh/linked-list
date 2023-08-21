class Node {
    constructor(data) {
        this.data = data;
        this.link = null;
    }
}

class LinkedList {
    constructor() {
        this.root = null
    }
    _append(node, data) {
        if (this.root === null) {
            this.root = new Node(data);
            return;
        }
        if (node.link === null) {
            const newNode = new Node(data);
            node.link = newNode;
        }  else
        this._append(node.link, data);
    }

    append(data) {
        this._append(this.root, data)
    }

    _prepend(node, data) {
        if (this.root === null) {
            this.root = new Node(data);
            return;
        }
        const newNode = new Node(data);
        newNode.link = node;
        this.root = newNode;
    }
    prepend(data) {
        this._prepend(this.root, data)
    }



    toString(node) {
        let print = ``;
        while (node !== null) {
                print += `[${node.data}] -> `;
                node = node.link;
            };
        print += " null";
        console.log(print);
    }

    size(node) {
        if (node === null) return 0;
        else return 1 + this.size(node.link);
    }

    head(node) {
        return node.data;
    }

    tail(node) {
        if (node.link === null) return node.data
        else return this.tail(node.link)
    }

    at(node, index) {
        if (index === 0) return node.data
        else return this.at(node.link, index-1)
    }
    pop(node) {
        let size = this.size(node);
        while (size > 2) {
            node = node.link;
            size--;
        }
        node.link = null;
    }
    contains(node, data) {
        if (node === null) return false
        else if (node.data === data) return true
        else return this.contains(node.link, data)
        
    }
    find(node, data, index = 0) {
        if (node === null) return null
        else if (node.data === data) return index
        else return this.find(node.link, data, index + 1)
    }
    insertAt(node, data, index) {
        if (index === 0) {
            const temp = this.root;
            this.root = new Node (data);
            this.root.link = temp;
        } else if (index > this.size(node))
         return
        else {
            let currentIndex = 1
            while(currentIndex < index) {
                currentIndex++
                node = node.link
            };
            const newNode = new Node (data);
            const temp = node.link;
            newNode.link = temp;
            node.link = newNode;


        }
    }
        
    removeAt(node, index) {
        if (index === 0) {
            const temp = this.root.link;
            this.root = temp;
        }
        else if (index > this.size(node)) return
        else {
            let currentIndex = 1
            while(currentIndex < index) {
                currentIndex++
                node = node.link
            };
            const temp = node.link ? node.link.link: null;
            node.link = temp;
            
        }
        
    }




} 

const list = new LinkedList(); 
list.append(1123);
list.append(42342);
list.append(242);
list.append(2431232132);
list.append(24222222);
list.append(242213);
list.prepend(9999);
list.toString(list.root);
console.log(list.size(list.root));
console.log(list.head(list.root));
console.log(list.tail(list.root));
console.log(list.at(list.root, 2));
list.pop(list.root);
list.toString(list.root);
console.log(list.contains(list.root, 123))
console.log(list.root.data);
console.log(list.find(list.root, 9999123));
list.insertAt(list.root, 777777777, 5);
list.removeAt(list.root, 6);
list.toString(list.root);
console.log(list.root);



