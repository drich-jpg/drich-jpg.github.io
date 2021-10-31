"use strict";

/*

   Main Page Slide Show Function
      carousel() displays a slideshow of images 
      with their associated captions on the
      home page 
  
   Author: David Richards
   Date:   2021-10-31

   Filename: slideshow.js
*/

// Subtitle captions for the main page slideshow
var captions = new Array(8);
captions[0] = "";
captions[1] = "";
captions[2] = "";
captions[3] = "";
captions[4] = "";
captions[5] = "";
captions[6] = "";
captions[7] = "";

var i = 1;

// Cycles through images in the slideshow folder
function carousel() {
   document.getElementById("slideshow").innerHTML = "<figure><img alt='' src='img/slideshow/slide" + i + ".jpg' /><figcaption>" + captions[i] + "</figcaption></figure>";

   i++;

   if (i >= captions.length) {
      i = 0;
   }
}

// Slideshow speed
setInterval("carousel()", 5000);
