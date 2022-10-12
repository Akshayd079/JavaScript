function storeData(){
  var data = document.getElementById('1').value;
  if (data ==""){
    alert ("Please enter some text into input box");
    return false;
  }
  var task = document.createElement('div');
  task.appendChild(document.createTextNode(data));
  var img = document.createElement("img");
  img.setAttribute("src","images.png");
  img.onclick = function(){
    task.remove();
  }
  task.appendChild((img))
  img.style.height = '10px';
  document.getElementsByClassName('data')[0].appendChild(task);
  document.getElementById('1').value = "";

}

function clearData(){
  var myNode = document.getElementsByClassName('data')[0];

  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }

}

