var links = document.getElementsByClassName("r");
for (var i=0;i<links.length;i++) {
  var b = links[i];
  b.children[0].innerText = b.children[0].innerText.replace(/[.,?!:;]$/, '') + ', kupo!'; 
}
