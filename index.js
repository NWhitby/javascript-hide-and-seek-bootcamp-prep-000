function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRank() {
  
}

function deepestChild() {
  let grandNode = document.getElementById('grand-node').querySelectorAll('div')
  return grandNode[grandNode.length-1]

}