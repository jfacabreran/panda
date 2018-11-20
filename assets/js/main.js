var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];
var divPic = document.getElementById("pictures");
for(var i in pictures){
	var img = document.createElement("img");
	img.src=pictures[i];
	img.setAttribute("class","pic");
	divPic.appendChild(img);
}