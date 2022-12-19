//设置装饰数组z，并且赋值都为1
var z=[1,1,1,1,1];

var style = localStorage.getItem('style');
var color = localStorage.getItem('clothcolor');
var pattern = localStorage.getItem('pattern');
var decoration = "";
var url = localStorage.getItem('url');

/*function decorate(id){
	//按钮设置
	z[id]=0;
    decoration="z";
	turn();
}*/

function show(){
	//按钮
	if(style<=2){
		for(i=1;i<=3;i++){
			var obj = document.getElementById("decorate4");
			obj.style.visibility="hidden";
			document.getElementById("decorate"+i).style.backgroundImage="url('../CSS/img/c"+style+"d"+i+".png')";
		}
		document.getElementById("cloth").style.backgroundImage=url;
	}else{
		for(i=1;i<=4;i++){
			document.getElementById("decorate"+i).style.backgroundImage="url('../CSS/img/c"+style+"d"+i+".png')";
		}
		document.getElementById("cloth").style.backgroundImage=url;
	}

}

function turn(id){
	z[id]=0;
    decoration="z";
	
	for(var i=1;i<5;i++){
		if(z[i]==0){
			decoration=decoration+String(i);
		}
	}

	// if(color==""&&pattern==""){
	// 	document.getElementById("cloth").style.backgroundImage="url(/CSS/img/cloth/c"+style+decoration+".png)";
	// 	url="url(/CSS/img/cloth/c"+style+decoration+".png)";
	// }
	// if(color==""&&pattern!=""){
	// 	document.getElementById("cloth").style.backgroundImage="url(/CSS/img/cloth/c"+style+"p"+pattern+decoration+".png)";
	// 	url="url(/CSS/img/cloth/c"+style+"p"+pattern+decoration+".png)";
	// }
	// if(pattern==""&&color!=""){
	// 	document.getElementById("cloth").style.backgroundImage="url(/CSS/img/cloth/c"+style+"color"+color+decoration+".png)";
	// 	url="url(/CSS/img/cloth/c"+style+"color"+color+decoration+".png)";
	// }
	// if(color!=""&&pattern!=""){
	// 	document.getElementById("cloth").style.backgroundImage="url(/CSS/img/cloth/c"+style+"color"+color+"p"+pattern+decoration+".png)";
	// 	url="url(/CSS/img/cloth/c"+style+"color"+color+"p"+pattern+decoration+".png)";
	// }
	var index = url.indexOf(".");
	document.getElementById("cloth").style.backgroundImage=url.substring(0,index)+decoration+url.substring(index);

}

function none(){
	for(var j=0;j<5;j++){
		z[j]=1;	
	}
	decoration="";

	var index = url.indexOf(".");
	document.getElementById("cloth").style.backgroundImage=url.substring(0,index)+decoration+url.substring(index);
}

function get(){
	url = document.getElementById("cloth").style.backgroundImage;
	localStorage.setItem('decoration',decoration);
	localStorage.setItem('url',url);
}



function createStar(){
		  var offsetWidth = document.getElementById("star").offsetWidth;
    	  var offsetHeight = document.getElementById("star").offsetHeight;
    	  for(var i=0;i<10;i++){
    	  	//创建星，并设置相应样式
	    	  var star = document.createElement("img");
	    	  star.src = "../CSS/img/star.png";
	    	  star.style.position = "absolute";
	    	  star.style.width="7%";
	    	  star.style.height="6%";
	    	  star.style.left = (Math.random()*offsetWidth)+"px";
	    	  star.style.top = (Math.random()*offsetHeight)+"px";
	    	  star.style.opacity = 0;
	    	  star.style.animation = "st 3s ease";//给星添加animation动画
	    	  
	    	  //动画完成，将星从body中删除
	    	  star.addEventListener("animationend",function(){
	    		  document.getElementById("star").removeChild(this);
	    	  });
	    	  
	    	  //将星添加给body
	    	  document.getElementById("star").appendChild(star);
	    	  
    	  }
    	  
    	  
}