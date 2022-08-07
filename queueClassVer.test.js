import queue from "./queueClassVer.js";

describe("==========queueClass test===========", () => {
  test("Queue <constructor> test", () => {
    const testQueue = new queue();
    expect(testQueue.start).toBe(null);
    expect(testQueue.end).toBe(null);
    expect(testQueue.length).toBe(0);
  });

  test("Queue <enqueue> test", () => {
    const testQueue = new queue();
    const inputNum = 5;
    testQueue.enqueue(inputNum);
    expect(testQueue.length).toBe(1);
    expect(testQueue.getAll()).toEqual([...[inputNum]]);
    expect(testQueue.dequeue()).toBe(inputNum);
  });

  test("Queue <dequeue> test", () => {
    const testQueue = new queue();
    expect(testQueue.dequeue()).toBe(undefined);
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    expect(testQueue.length).toBe(3);
    expect(testQueue.dequeue()).toBe(1);
    expect(testQueue.dequeue()).toBe(2);
    expect(testQueue.dequeue()).toBe(3);
    expect(testQueue.length).toBe(0);
  });

  test("Queue <getAll> test", () => {
    const testQueue = new queue();
    const testArray = [2, 3, 4, 5, 3, 2, 5, 7, 9, 10];
    testArray.forEach((e) => testQueue.enqueue(e));
    expect(testQueue.getAll()).toEqual(testArray);
    expect(testQueue.length).toBe(testArray.length);
  });
});
