"use strict";
function linkedList(arr) {
  const head = {};
  let cur = head;

  for (let i = 0; i < arr.length; i++) {
    cur.value = arr[i];
    cur.next = i === arr.length - 1 ? null : {};
    cur = cur.next;
  }

  return getArr(reverseList(head));

    function reverseList(head) {
    if (!head.value || !head.next) return head;
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
  }

  function getArr(list) {
    const result = [];

    if (list.value === undefined) return result;

    let head = list;

    while (head !== null) {
      result.push(head.value);
      head = head.next;
    }
    return result;
  }
}

console.log(linkedList([1, 2, 3, 4, 5])); // [5,4,3,2,1]
console.log(linkedList([1, 2])); // [2,1]
console.log(linkedList([])); // []
