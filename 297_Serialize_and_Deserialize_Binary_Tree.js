"use strict";

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

// из дерева в строковый формат
var serialize = function (root) {
  if (!root) {
    return [];
  }

  const result = [root.val];
  const queue = [root];

  let queueIndex = 0;

  while (queueIndex < queue.length) {
    const current = queue[queueIndex];
    queueIndex += 1;

    if (current.left instanceof TreeNode) {
      result.push(current.left.val);
      queue.push(current.left);
    } else {
      result.push(current.left);
    }

    if (current.right instanceof TreeNode) {
      result.push(current.right.val);
      queue.push(current.right);
    } else {
      result.push(current.right);
    }
  }

  return result;
};

// из строкового формата в дерево
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

console.log(serialize(deserialize([1, 2, 3, null, null, 4, 5])));
console.log(serialize(deserialize([])));
