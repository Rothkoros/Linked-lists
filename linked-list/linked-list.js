class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
    insert(num) {
        let newNode = new LinkedListNode(num)
        if (!this.head) {
            this.head == newNode
        } else {

            let node = this.head
            while (node.next) {
                node = node.next
            }
            node.next = newNode
        }
    }
    remove(val) {
        let node = this.head;
        let previous = null;
        while (node) {
            if (node.data == val)
                if (previous != null) {
                    previous.next = node.next
                } else {
                    this.head = null;
                }
            return;
        }
        previous = node;
        node = node.next;
    }
    find(node) {

        let current = this.head;
        if (!node) {
            return null;
        }

        while (current) {
            // Break out when we find the node
            if (current.next === node) {
                break;
            }


            current = current.next;
        }

        return current;
    }
}





let node1 = new LinkedListNode(2)