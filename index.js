function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild(){
  let grandNode = document.getElementById('grand-node').querySelectorAll('div')
  return grandNode[deep.length-1]

}