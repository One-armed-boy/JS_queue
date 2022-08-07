import queue from "./queueFuncVer.js";

describe("==========queueFunc test===========",()=>{
    test("Queue <declaration> test",()=>{
        const testQueue = queue();
        expect(testQueue.length()).toBe(0);
        expect(testQueue.getAll()).toEqual([]);
    });

    test("Queue <enqueue> test",()=>{
        const testQueue = queue();
        const testArray = [1,2,3,2,4,5,6];
        testArray.forEach((e)=>testQueue.enqueue(e))
        expect(testQueue.length()).toBe(testArray.length);
        expect(testQueue.getAll()).toEqual(testArray);
    });

    test("Queue <dequeue> test",()=>{
        const testQueue = queue();
        expect(testQueue.dequeue()).toBe(undefined);
        const testArray = [1,2,3,2,4,5,6];
        testArray.forEach((e)=>testQueue.enqueue(e));
        expect(testQueue.dequeue()).toBe(1);
        expect(testQueue.dequeue()).toBe(2);
        expect(testQueue.dequeue()).toBe(3);
        expect(testQueue.length()).toBe(testArray.length-3);
    });

    test("Queue <getAll> test",()=>{
        const testQueue = queue();
        const testArray = [1,2,3,2,4,5,6];
        testArray.forEach((e)=>testQueue.enqueue(e));
        expect(testQueue.getAll()).toEqual(testArray);
    });
})