var imageOne = new Image();
imageOne.src = "./Images/br.jfif";
//var timer = 0;
//var myInterval = -1;
const songNames = [{title: "Omertà", spotifyURI: "https://open.spotify.com/track/3kCwyvhvVTyehIzYN2I0nF".link("https://open.spotify.com/track/3kCwyvhvVTyehIzYN2I0nF")},
				   {title: "Money in the Grave", spotifyURI: "5ry2OE6R2zPQFDO85XkgRb".link("https://open.spotify.com/track/5ry2OE6R2zPQFDO85XkgRb")},
				   {title: "Diplomatic Immunity", spotifyURI: "4haJoBPbPj9QFKNpp9e8kx".link("https://open.spotify.com/track/4haJoBPbPj9QFKNpp9e8kx")},
				   {title: "Deep Pockets", spotifyURI: "3IvMYBE7A3c7to1aEcfFJk".link("https://open.spotify.com/track/3IvMYBE7A3c7to1aEcfFJk")},
				   {title: "Sooner Than Later", spotifyURI: "43iKgGbmfqPLh3mxUlospI".link("https://open.spotify.com/track/43iKgGbmfqPLh3mxUlospI")},
				   {title: "Bria's Interlude", spotifyURI: "4i3GraNMzBKze1WsVl38DS".link("https://open.spotify.com/track/4i3GraNMzBKze1WsVl38DS")},
				   {title: "The Calm", spotifyURI: "6MlGqWzDiLkZ0vmAEsisEk".link("https://open.spotify.com/track/6MlGqWzDiLkZ0vmAEsisEk")},
				   {title: "Brand New", spotifyURI: "4XTXamS1g4g93jPxyuFJJ6".link("https://open.spotify.com/track/4XTXamS1g4g93jPxyuFJJ6")},
				   {title: "Congratulations", spotifyURI: "3SnXwQUrvSacFziUYXTNKY".link("https://open.spotify.com/track/3SnXwQUrvSacFziUYXTNKY")}];


const songNames2 = [{title: "Omertà", spotifyURI: "https://open.spotify.com/track/3kCwyvhvVTyehIzYN2I0nF".link("https://open.spotify.com/track/3kCwyvhvVTyehIzYN2I0nF")},
				   {title: "Money in the Grave", spotifyURI: "5ry2OE6R2zPQFDO85XkgRb".link("https://open.spotify.com/track/5ry2OE6R2zPQFDO85XkgRb")},
				   {title: "Diplomatic Immunity", spotifyURI: "4haJoBPbPj9QFKNpp9e8kx".link("https://open.spotify.com/track/4haJoBPbPj9QFKNpp9e8kx")},
				   {title: "Deep Pockets", spotifyURI: "3IvMYBE7A3c7to1aEcfFJk".link("https://open.spotify.com/track/3IvMYBE7A3c7to1aEcfFJk")},
				   {title: "Sooner Than Later", spotifyURI: "43iKgGbmfqPLh3mxUlospI".link("https://open.spotify.com/track/43iKgGbmfqPLh3mxUlospI")},
				   {title: "Bria's Interlude", spotifyURI: "4i3GraNMzBKze1WsVl38DS".link("https://open.spotify.com/track/4i3GraNMzBKze1WsVl38DS")},
				   {title: "The Calm", spotifyURI: "6MlGqWzDiLkZ0vmAEsisEk".link("https://open.spotify.com/track/6MlGqWzDiLkZ0vmAEsisEk")},
				   {title: "Brand New", spotifyURI: "4XTXamS1g4g93jPxyuFJJ6".link("https://open.spotify.com/track/4XTXamS1g4g93jPxyuFJJ6")},
				   {title: "Congratulations", spotifyURI: "3SnXwQUrvSacFziUYXTNKY".link("https://open.spotify.com/track/3SnXwQUrvSacFziUYXTNKY")}];
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
      nodes[i].style.display = +"block";
    } else {
      nodes[i].style.display = "none";
    }
    // for (let obj of names) {
    //   //console.log(obj.Points);
    // mainContainers.innerHTML += "Name: " + obj.FirstNameLastName +  "<br>";
    // }
  

  }

  // if(searchBox == "Drake"){
  //     document.body.innerHTML += pics1; // prints out data
  //     document.write(pics1)
  // }
}


function searches(){
  var T = document.getElementById("output");
  T.style.display = "block";  // <-- Set it to block
     for (let obj of songNames) {
       //console.log(obj.Points);
     T.innerHTML += "title: " + obj.title +  "<br>" + "SpotifyURL: " + obj.spotifyURI + "<br>";
     }
}


function search2(){
	var T = document.getElementById("output2");
  T.style.display = "block";  // <-- Set it to block
     for (let obj of songNames2) {
       //console.log(obj.Points);
     T.innerHTML += "title: " + obj.title +  "<br>" + "SpotifyURL: " + obj.spotifyURI + "<br>";
     }
}

function search3(){
	var T2 = document.getElementById("output3");
  T2.style.display = "block";  // <-- Set it to block
     for (let obj of songNames2) {
       //console.log(obj.Points);
     T.innerHTML += "title: " + obj.title +  "<br>" + "SpotifyURL: " + obj.spotifyURI + "<br>";
     }
}

function search4(){

}

function search5(){

}
