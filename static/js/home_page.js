//banner
var banner = document.getElementById('banner'),
	items = banner.getElementsByTagName('div'),
	d=items.length,
	lastI,
	e = lastI = items.length-1,
	left = document.getElementById('left-button'),
	right = document.getElementById('right-button');
function changeImage(change){
	if (change==1) {
		items[lastI].className = "right_active";
		items[e].className = "right_show";
	}else{
		items[lastI].className = "left_active";
		items[e].className = "left_show";
	}
	items[lastI].addEventListener("webkitAnimationEnd",endFunction);
	items[lastI].addEventListener("animationend",endFunction);
	function endFunction(){
		items[e].className = "";
		items[lastI].className = "";
	};
	lastI = e;
}
	left.addEventListener("click",function(){
		e = e - 1 < 0 ? e - 1 + d : e - 1 ;
		changeImage(2);
	});
	right.addEventListener("click",function(){
		e = e + 1 >= d ? e + 1 - d : e + 1;
		changeImage(1)
	});

//information
 $(document).ready(function(){
     $(".title_s div").click(function(){
         $("#info_content .information").hide();
         var name=$(this).attr("id");
         $("#"+name+"_con").show();
        })
     })
