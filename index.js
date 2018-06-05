function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  const grandNode = document.querySelector('#grand-node');
  let deepestNode = grandNode.children[0];
   for (var i = 0; !deepestNode.children[i]; i) {
     deepestNode = deepestNode.children[0]
}
  return deepestNode;
}