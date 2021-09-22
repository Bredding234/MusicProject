var imageOne = new Image();
imageOne.src = "./Images/br.jfif";
//var timer = 0;
//var myInterval = -1;

function change()
{

    document.images[0].src = "./Images/drake.jpg";
   	 imageOne = setTimeout(change2, 2000);
	 
    }
setTimeout(change, 2000);

function change2(){
   	 document.images[0].src = "./Images/em.jfif";
   	 setTimeout(change3, 2000);
}

function change3(){
   	 document.images[0].src = "./Images/nasx.jfif";
}

function setTimer(){
// this pauses the slideshow.
    clearTimeout(imageOne);
   	 
}
function startSlide()
{
// this resumes the slide show.
	imageOne = setTimeout(change, 500);
}

function backToFirstImage(){
	   	 document.images[0].src = "./Images/king.jfif";
}


function restartSlides(){
   	 document.images[0].src = "./Images/nasx.jfif";
	imageOne = setTimeout(backToFirstImage, 2000);
}

