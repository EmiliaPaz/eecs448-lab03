let arrImg = ["img/arequipa.jpg", "img/mp.jpg", "img/colca.jpg", "img/lima.jpg", "img/amazonas.jpg", "img/cusco.jpg"];
let i=1;

function nextPicture(){
  // Change picture displayed
  document.getElementById("slide").src = arrImg[i];

  // Update index
  if(i==5){
    i=0;
  }
  else{
    i=i+1;
  }
}

function previousPicture(){
  // Change picture displayed
  document.getElementById("slide").src = arrImg[i];

  // Update index
  if(i==0){
    i=5;
  }
  else{
    i=i-1;
  }
}
