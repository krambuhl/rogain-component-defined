const splitTrees = require('rogain-utils').splitTrees;

module.exports = function Defined(tree, props) {
  var split = splitTrees(tree.children, { type: 'component', name: 'Else' });
  var res;

  if (tree.data === undefined) {
    res = split[1];
  } else if (Array.isArray(tree.data)) {
    res = split[tree.data.length > 0 ? 1 : 0];
  } else if (typeof tree.data === 'object') {
    res = split[Object.keys(tree.data).length > 0 ? 1 : 0];
  } else {
    res = split[0];
  }

  return res && res.length > 0 ? res : undefined;
}