var refresh ;
   
$(document).ready(function(){
if ( $(window).width() > 700)
 refresh = true;
else{
 refresh=false;
}
});


$(window).resize( function(){

if (($(window).width() > 300) && ($(window).width() < 700) ) 
{
  if (refresh === true) location.reload();
}
 else {
	 if (refresh === false) location.reload();
}


} );

const filemaker=(name,down)=>{
return{
	name:name,
	down:parseInt(down,10)
};
};



function one(){
let b=0;
let arr=[];
  let k=document.querySelector(".Course1").getElementsByClassName("c1");
  for(let i=0;i<k.length;i++){
  	arr.push(filemaker(k[i].querySelector("h6").innerHTML,k[i].querySelector(".num").innerHTML));

  }

  for(let i=0;i<arr.length;i++){
 	let max=arr[i].down;
 	b=i;
 	for(let j=i+1;j<arr.length;j++){
 		if(max<arr[j].down){
 			max=arr[j].down;
 			b=j;
 		}
 	}
 	let k=arr[i];
 	arr[i]=arr[b];
 	arr[b]=k;
 }
 //console.log(arr[0].down);
 for(i=0;i<5&&i<arr.length;i++){
	document.querySelector(".cs1").innerHTML +="<div class=\"com\"><div class=\"fa fa-file-pdf-o\" style=\"color:white;font-size:1.4rem;font-weight:bold;\"> "+arr[i].name+"</div> <div>"+arr[i].down+" Downloads</div></div>";
}	

};

function two(){
	let b=0;
let arr=[];
  let k=document.querySelector(".Course2").getElementsByClassName("c1");
  for(let i=0;i<k.length;i++){
  	arr.push(filemaker(k[i].querySelector("h6").innerHTML,k[i].querySelector(".num").innerHTML));

  }

  for(let i=0;i<arr.length;i++){
 	let max=arr[i].down;
 	b=i;
 	for(let j=i+1;j<arr.length;j++){
 		if(max<arr[j].down){
 			max=arr[j].down;
 			b=j;
 		}
 	}
 	let k=arr[i];
 	arr[i]=arr[b];
 	arr[b]=k;
 }
 //console.log(arr[0].down);
 for(i=0;i<5&&i<arr.length;i++){
	document.querySelector(".cs2").innerHTML+="<div class=\"com\"><div class=\"fa fa-file-pdf-o\" style=\"color:white;font-size:1.4rem;font-weight:bold;\"> "+arr[i].name+"</div> <div>"+arr[i].down+" Downloads</div></div>";
}	
};




function three(){

	let b=0;
let arr=[];
  let k=document.querySelector(".Course3").getElementsByClassName("c1");
  for(let i=0;i<k.length;i++){
  	arr.push(filemaker(k[i].querySelector("h6").innerHTML,k[i].querySelector(".num").innerHTML));

  }

  for(let i=0;i<arr.length;i++){
 	let max=arr[i].down;
 	b=i;
 	for(let j=i+1;j<arr.length;j++){
 		if(max<arr[j].down){
 			max=arr[j].down;
 			b=j;
 		}
 	}
 	let k=arr[i];
 	arr[i]=arr[b];
 	arr[b]=k;
 }
 //console.log(arr[0].down);
 for(i=0;i<5&&i<arr.length;i++){
	document.querySelector(".cs3").innerHTML+="<div class=\"com\"><div class=\"fa fa-file-pdf-o\" style=\"color:white;font-size:1.4rem;font-weight:bold;\"> "+arr[i].name+"</div> <div>"+arr[i].down+" Downloads</div></div>";
}	

};



function four(){
	let b=0;
let arr=[];
  let k=document.querySelector(".Course4").getElementsByClassName("c1");
  console.log(k);
  for(let i=0;i<k.length;i++){
  	arr.push(filemaker(k[i].querySelector("h6").innerHTML,k[i].querySelector(".num").innerHTML));

  }
   console.log(arr);

  for(let i=0;i<arr.length;i++){
 	let max=arr[i].down;
 	b=i;
 	for(let j=i+1;j<arr.length;j++){
 		if(max<arr[j].down){
 			max=arr[j].down;
 			b=j;
 		}
 	}
 	let k=arr[i];
 	arr[i]=arr[b];
 	arr[b]=k;
 }
 //console.log(arr[0].down);
 for(i=0;i<5&&i<arr.length;i++){
	document.querySelector(".cs4").innerHTML+="<div class=\"com\"><div class=\"fa fa-file-pdf-o\" style=\"color:white;font-size:1.4rem;font-weight:bold;\"> "+arr[i].name+"</div> <div>"+arr[i].down+" Downloads</div></div>";
}

};
	

function openNav() {
	if(screen.width>738){
  document.getElementById("mySidenav").style.width = "500px";
 
 if(document.getElementById("C1").className!="ck1")
{
	one();
}
else if(document.getElementById("C2").className!="ck2")
		{	
			two();
		}
	else if(document.getElementById("C3").className!="ck3")	
		{
			three();
		}
		else if(document.getElementById("C4").className!="ck4")
		{
			four();
		}
}
	else{
  	document.getElementById("mySidenav").style.width = "100%";
  	if(document.getElementById("mc").innerHTML==="Course 1")
{
	one();
}
else if(document.getElementById("mc").innerHTML==="Course 2")
		{	
			two();
		}
	else if(document.getElementById("mc").innerHTML==="Course 3")	
		{
			three();
		}
		else if(document.getElementById("mc").innerHTML==="Course 4")
		{
			four();
		}
	}
};

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
   document.querySelector(".cs1").innerHTML="";
    document.querySelector(".cs2").innerHTML="";
    document.querySelector(".cs3").innerHTML="";
    document.querySelector(".cs4").innerHTML="";
   
};

$(".ck2").on("click",()=>{
	$(event.currentTarget).addClass("active");
	$(event.currentTarget).siblings().removeClass("active");
	$(".Course2").removeClass("hidden");
	$(".Course1").addClass("hidden");
	$(".Course3").addClass("hidden");
	$(".Course4").addClass("hidden");
	$(".cs2").removeClass("hidden");
	$(".cs1").addClass("hidden");
	$(".cs3").addClass("hidden");
	$(".cs4").addClass("hidden");
	closeNav();

}).on("mouseenter",()=>{
	$(event.currentTarget).addClass("hover");
}).on("mouseleave",()=>{
	$(event.currentTarget).removeClass("hover");
});
$(".ck3").on("click",()=>{
	$(".Course3").removeClass("hidden");
	$(".Course1").addClass("hidden");
	$(".Course2").addClass("hidden");
	$(".Course4").addClass("hidden");
	$(event.currentTarget).addClass("active");
	$(event.currentTarget).siblings().removeClass("active");
	$(".cs3").removeClass("hidden");
	$(".cs1").addClass("hidden");
	$(".cs2").addClass("hidden");
	$(".cs4").addClass("hidden");
	closeNav();
	
}).on("mouseenter",()=>{
	$(event.currentTarget).addClass("hover");
}).on("mouseleave",()=>{
	$(event.currentTarget).removeClass("hover");
}).on("mouseenter",()=>{
	$(event.currentTarget).addClass("hover");
}).on("mouseleave",()=>{
	$(event.currentTarget).removeClass("hover");
});
$(".ck4").on("click",()=>{
	$(".Course4").removeClass("hidden");
	$(".Course1").addClass("hidden");
	$(".Course3").addClass("hidden");
	$(".Course2").addClass("hidden");
$(event.currentTarget).addClass("active");
	$(event.currentTarget).siblings().removeClass("active");
	$(".cs4").removeClass("hidden");
	$(".cs1").addClass("hidden");
	$(".cs3").addClass("hidden");
	$(".cs2").addClass("hidden");
	closeNav();
	
}).on("mouseenter",()=>{
	$(event.currentTarget).addClass("hover");
}).on("mouseleave",()=>{
	$(event.currentTarget).removeClass("hover");
});
$(".ck1").on("click",()=>{
	$(".Course1").removeClass("hidden");
	$(".Course2").addClass("hidden");
	$(".Course3").addClass("hidden");
	$(".Course4").addClass("hidden");
$(event.currentTarget).addClass("active");
	$(event.currentTarget).siblings().removeClass("active");
	$(".cs1").removeClass("hidden");
	$(".cs2").addClass("hidden");
	$(".cs3").addClass("hidden");
	$(".cs4").addClass("hidden");
	closeNav();
	
}).on("mouseenter",()=>{
	$(event.currentTarget).addClass("hover");
}).on("mouseleave",()=>{
	$(event.currentTarget).removeClass("hover");
});



function doinc(){

let b= event.target.parentElement.previousElementSibling.querySelector("h6").innerHTML
let a=	event.target.previousElementSibling.querySelector(".num").innerHTML ;
let c= event.target.parentElement.parentElement.parentElement.className;
console.log(c);
console.log(b);
a++;
event.target.previousElementSibling.querySelector(".num").innerHTML=a;
$.post("update.php",{courses:c,dname:b,downloads:a});
};






$(".k").on("click",()=>{
	$("#mc").css("color","white");
	$(event.currentTarget).css({
		backgroundColor:"transparent",
		borderBottom:" 2px solid #4CAF50"
	});
})








$(".cm2").on("click",()=>{
	$("#mc").css("color","#4CAF50");
	$(".Course2").removeClass("hidden");
	$(".Course1").addClass("hidden");
	$(".Course3").addClass("hidden");
	$(".Course4").addClass("hidden");
	$(".cs2").removeClass("hidden");
	$(".cs1").addClass("hidden");
	$(".cs3").addClass("hidden");
	$(".cs4").addClass("hidden");
	$a= $(event.currentTarget).html();
	$("#mc").html($a);
	$(".k").css({
		borderBottom:" 2px solid white",

	});

});
$(".cm3").on("click",()=>{
	$("#mc").css("color","#4CAF50");
	$(".Course3").removeClass("hidden");
	$(".Course1").addClass("hidden");
	$(".Course2").addClass("hidden");
	$(".Course4").addClass("hidden");
	$(".cs3").removeClass("hidden");
	$(".cs1").addClass("hidden");
	$(".cs2").addClass("hidden");
	$(".cs4").addClass("hidden");
	$a= $(event.currentTarget).html();
	$("#mc").html($a);
	$(".k").css({
		borderBottom:" 2px solid white"
	});
	
});
$(".cm4").on("click",()=>{
	$("#mc").css("color","#4CAF50");
	$(".Course4").removeClass("hidden");
	$(".Course1").addClass("hidden");
	$(".course3").addClass("hidden");
	$(".Course2").addClass("hidden");
	$(".cs4").removeClass("hidden");
	$(".cs1").addClass("hidden");
	$(".cs3").addClass("hidden");
	$(".cs2").addClass("hidden");
	$a= $(event.currentTarget).html();
	$("#mc").html($a);
	$(".k").css({
		borderBottom:" 2px solid white"
	});
	
});
$(".cm1").on("click",()=>{
	$("#mc").css("color","#4CAF50");
	$(".Course1").removeClass("hidden");
	$(".Course2").addClass("hidden");
	$(".Course3").addClass("hidden");
	$(".Course4").addClass("hidden");
	$(".cs1").removeClass("hidden");
	$(".cs2").addClass("hidden");
	$(".cs3").addClass("hidden");
	$(".cs4").addClass("hidden");
	$a= $(event.currentTarget).html();
	$("#mc").html($a);
	$(".k").css({
		borderBottom:" 2px solid white",
		
	});
});




