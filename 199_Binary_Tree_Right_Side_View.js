"use strict";

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

var rightSideView = function (root) {
  if (!root) {
    return [];
  }

  const result = [root.val];
  const stack = [
    { node: root.left, level: 1 },
    { node: root.right, level: 1 },
  ];

  let currentHeight = 0;

  while (stack.length) {
    const { node, level } = stack.pop();

    if (node === null || node === undefined) continue;

    if (result[level] === undefined) {
      result[level] = node.val;

      currentHeight = level;
    }

    stack.push(
      { node: node?.left, level: level + 1 },
      { node: node?.right, level: level + 1 }
    );
  }

  return result;
};

var deserialize = function (data) {
  if (!data || data.length === 0) {
    return null;
  }

  let result = buildTree(0);

  return result;

  function buildTree(index) {
    if (index * 2 + 2 > data.length) return data[index];
    const node = new TreeNode(data[index]);

    node.left = data.length > 2 * index + 1 ? buildTree(2 * index + 1) : null;

    node.right = data.length > 2 * index + 2 ? buildTree(2 * index + 2) : null;

    return node;
  }
};

console.log(rightSideView(deserialize([1, 2, 3, null, 5, null, 4]))); //[1,3,4]
console.log(rightSideView(deserialize([1, 2, 3, 4, null, null, null, 5]))); //[1,3,4,5]
console.log(rightSideView(deserialize([1, null, 3]))); //[1,3]
console.log(rightSideView(deserialize([]))); //[]
console.log(rightSideView(deserialize([1, 2, 0]))); //[1,0]
