function createQueue() {
    const queue = [];
    function getFront() {
        return queue.length > 0 ? queue[0] : undefined;
    }
    function getBack() {
        return queue.length > 0 ? queue[queue.length - 1] : undefined;
    }
    function getSize() {
        return queue.length;
    }
    function enQueue(data) {
        queue.push(data);
    }
    function deQueue() {
        return queue.shift();
    }
    return { getFront, getBack, getSize, enQueue, deQueue };
}

describe("createQueue()", () => {
    it("all in one", () => {
        const queue = createQueue();
        expect(queue.getSize()).toBe(0);
        expect(queue.getFront()).toBeUndefined();
        expect(queue.getBack()).toBeUndefined();

        //queue 1
        queue.enQueue(1);
        expect(queue.getSize()).toBe(1);
        expect(queue.getFront()).toBe(1);
        expect(queue.getBack()).toBe(1);

        //queue 2
        queue.enQueue(2);
        expect(queue.getSize()).toBe(2);
        expect(queue.getFront()).toBe(1);
        expect(queue.getBack()).toBe(2);

        //dequeue
        const one = queue.deQueue();
        expect(one).toBe(1);
        expect(queue.getSize()).toBe(1);
        expect(queue.getFront()).toBe(2);
        expect(queue.getBack()).toBe(2);

        //dequeue
        const two = queue.deQueue();
        expect(two).toBe(2);
        expect(queue.getSize()).toBe(0);
        expect(queue.getFront()).toBeUndefined();
        expect(queue.getBack()).toBeUndefined();
    });
});
