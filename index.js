function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let rank = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < rank.length; i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n;
  }
}

function deepestChild() {
  let grandNode = document.getElementById('grand-node').querySelectorAll('div')
  return grandNode[grandNode.length-1]

}