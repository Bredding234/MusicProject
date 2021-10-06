var imageOne = new Image();
imageOne.src = "./Images/br.jfif";
//var timer = 0;
//var myInterval = -1;


// change method changes the picture every two seconds
// function change()
// {

//     document.images[0].src = "./Images/drake.jpg";
//    	 imageOne = setTimeout(change2, 2000);
	 
//     }
// setTimeout(change, 2000);

// // change method changes the 2nd picture to third every two seconds

// function change2(){
//    	 document.images[0].src = "./Images/em.jfif";
//    	 setTimeout(change3, 2000);
// }
// // change method changes the 3rd picture to fourth every two seconds

// function change3(){
//    	 document.images[0].src = "./Images/nasx.jfif";
// }


// function setTimer(){
// // this pauses the slideshow.
//     clearTimeout(imageOne);
   	 
// }
// function startSlide()
// {
// // this resumes the slide show.
// 	imageOne = setTimeout(change, 500);
// }
// // the function 
// function backToFirstImage(){
// 	   	 document.images[0].src = "./Images/king.jfif";
// }


// function restartSlides(){
//    	 document.images[0].src = "./Images/nasx.jfif";
// 	imageOne = setTimeout(backToFirstImage, 2000);
// }

// (A) WAIT FOR PAGE TO FULLY LOAD
 

function searchButton(){
  var searchBox = document.getElementById("fnames");
  var filter = searchBox.value.toLowerCase();
  var nodes = document.getElementsByClassName("our-team"); 
  for (i = 0; i < nodes.length; i++) {
    if (nodes[i].innerText.toLowerCase().includes(filter)) {
      nodes[i].style.display = +"block" ;
    } else {
      nodes[i].style.display = "none";
    }
  }

  // if(searchBox == "Drake"){
  //     document.body.innerHTML += pics1; // prints out data
  //     document.write(pics1)
  // }
}


