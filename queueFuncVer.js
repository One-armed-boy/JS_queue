function Node(inputData) {
  let data = inputData;
  let next = null;

  return {
    getData: () => data,
    getNext: () => next,
    setNext: (node) => {
      next = node;
    },
  };
}

function queue() {
  let start = null;
  let end = null;
  let length = 0;

  return {
    enqueue: (data) => {
      const node = Node(data);
      if (length === 0) {
        start = node;
      } else {
        end.setNext(node);
      }
      end = node;
      length++;
    },
    dequeue: () => {
      if (length === 0) {
        return undefined;
      }
      const startNode = start;
      start = startNode.getNext();
      length--;
      return startNode.getData();
    },
    getAll: () => {
      let node = start;
      const result = [];
      while (node) {
        result.push(node.getData());
        node = node.getNext();
      }
      return result;
    },
    length: () => length,
  };
}

export default queue