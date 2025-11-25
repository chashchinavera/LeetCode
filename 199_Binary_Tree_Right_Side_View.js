"use strict";

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var rightSideView = function (root) {
  if (!root) {
    return [];
  }

  const result = [];
  const stack = [{ node: root, level: 0 }];

  while (stack.length) {
    const { node, level } = stack.pop();

    if (node === null || node?.val === null) continue;

    if (result[level] === undefined) {
      result[level] = node.val;
    }

    stack.push(
      { node: node.left, level: level + 1 },
      { node: node.right, level: level + 1 }
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
    if (index * 2 + 2 > data.length)
      return new TreeNode(data[index], undefined, undefined);

    return new TreeNode(
      data[index],
      buildTree(2 * index + 1),
      buildTree(2 * index + 2)
    );
  }
};

console.log(rightSideView(deserialize([1, 2, 3, null, 5, null, 4]))); //[1,3,4]
console.log(rightSideView(deserialize([1, 2, 3, 4, null, null, null, 5]))); //[1,3,4,5]
console.log(rightSideView(deserialize([1, null, 3]))); //[1,3]
console.log(rightSideView(deserialize([]))); //[]
console.log(rightSideView(deserialize([1, 2, 0]))); //[1,0]
