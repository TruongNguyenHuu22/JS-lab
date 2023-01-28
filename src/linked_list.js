function createLinkedList() {
    let head;
    function getHead() {
        if (!head) return;
        console.log(head.data);
    }

    function getTail() {
        let tail = head;
        if (!head) return;
        while (tail.next) {
            tail = tail.next;
        }
        return tail;
    }

    function getSize() {
        let size = 0;
        if (!head) return 0;
        let current = head;
        while (current) {
            size++;
            if (!current.next) return size;
            current = current.next;
        }
    }
    function findIndexbyData(data) {
        if (!head) return -1;

        let index = 0;
        let current = head;
        while (current) {
            if (current.data === data) return index;
            index++;
            current = current.next;
        }

        return -1;
    }

    function findWithCallback(callback) {
        if (!head) return undefined;

        let current = head;
        while (current) {
            if (callback(current.data)) return current.data;
            current = current.next;
        }

        return undefined;
    }

    function insertTail(data) {
        newNode = {
            data: data,
            next: null,
        };
        if (!head) {
            head = newNode;
        }
        const tail = getTail();
        tail.next = newNode;
    }

    function insertNode(position, data) {
        if (!head || position <= 0) {
            return insertHead(data);
        }

        let idx = 0;
        current = head;
        prev = head;
        newNode = {
            data: data,
            next: null,
        };

        while (idx < position && current) {
            idx++;
            prev = current;
            current = current.next;
        }
        prev.next = newNode;
        newNode.next = current;
    }

    function removeHead() {
        if (!head) {
            return;
        }
        current = head;
        head = current.next;
        current.next = null;
        return;
    }
    function removeTail() {
        if (!head) {
            return;
        }
        if (!head.next) {
            head = null;
            return;
        }

        current = head;
        secondLast = head;
        if (position <= 0) {
            head = current.next;
            current.next = null;
            return;
        }

        while (secondLast.next.next) {
            secondLast = secondLast.next;
        }
        secondLast.next = null;
    }

    function removeNode(position) {
        if (!head || position <= 0) {
            removeHead();
        }
        if (!head.next) {
            head = null;
            return;
        }
        let prev = head;
        let current = head;
        let i = 0;
        while (i < position && current.next) {
            prev = current;
            current = current.next;
            i++;
        }
        prev.next = current.next;
    }

    function insertHead(data) {
        newNode = {
            data: data,
            next: null,
        };
        newNode.next = head;
        head = newNode;
    }
    function print() {
        if (!head) return;
        while (head) {
            console.log(head.data);
            head = head.next;
        }
    }
    return {
        insertHead,
        print,
        getHead,
        getTail,
        getSize,
        findIndexbyData,
        findWithCallback,
        insertTail,
        insertNode,
        removeTail,
        removeNode,
    };
}

const list = createLinkedList();
list.insertHead(3);
list.insertHead(2);
list.insertHead(1);
// list.insertTail(6);
// list.insertNode(8, 7);
list.removeNode(1);
// list.insertHead(3);
// list.insertHead(2);
// list.getHead();
// list.getTail();
// console.log("size=", list.getSize());
list.print();
// list.findIndexbyData(5);
// console.log(
//     "findWithCallback=",
//     list.findWithCallback((x) => x % 2 === 0)
// );

// list.print();
