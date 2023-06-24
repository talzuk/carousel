var i= 0;
var imgs = document.getElementsByClassName("crousel-img");

function setMainImg(index){
    var selectd = document.getElementsByClassName('crousel-img')[index]
    var mainImage = document.getElementsByClassName("main-img")[0];
    mainImage.src = selectd.src;
    i=index;
    setSelected();
    handleInfo();

}

function arrowPress (dir){

    if(dir == 0){


      if (i == imgs.length-1) {
        i = 0;
      } else {
        i++;
      }
    }
    else{   
        if (i == 0) {
            i = imgs.length-1;
          } else {
            i--;
          }
    }

    setMainImg(i)
}

function setSelected(){

    for (let j = 0; j < imgs.length; j++) {
        imgs[j].style.opacity  = 0.5;
    }

    imgs[i].style.opacity = 1;
}

function handleInfo () {
var title= document.getElementsByClassName("crousel-img")[i].alt
document.getElementsByClassName("img-selection-title")[0].innerHTML= title;
document.getElementsByClassName("img-selection-title")[1].innerHTML= (i +1)+ "/5";
}   