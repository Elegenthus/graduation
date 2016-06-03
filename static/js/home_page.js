$(document).ready(function(){
    function showImage(c){
        var banner=document.getElementById('bottom_banner'),
        items=$("#banner div"),
        d=items.length,
        lastI=d-1,
        e=0,
        switch_left=document.getElementById("left-button"),
        switch_right=document.getElementById("right-button"),
        m;
        function addBreakTime() {
            m = setInterval(function () {
                e = e + 1 >= d ? e + 1 - d : e + 1;
                changeImage(-1);
            }, c);
        }
        function mouseControl() {
            clearInterval(m);
        }
        function changeImage(change){
            if(change==1){
                items[lastI].className = "right_active";
                items[e].className = "right_show";
            }else{
                items[lastI].className = "left_active";
                items[e].className = "left_show";
            }
            items[lastI].addEventListener("webkitAnimationEnd", endFunction);
            items[lastI].addEventListener("animationend", endFunction);
            function endFunction(){
                items[e].className = "";
                items[lastI].className = "";
            }
            lastI = e;
        }
        banner.onmouseover = mouseControl;
        banner.onmouseout = addBreakTime;
        switch_right.addEventListener("click",function(){
            e = e - 1 < 0 ? e - 1 + d : e - 1;
            changeImage(-1);
        });
        switch_left.addEventListener("click",function(){
            e = e + 1 >= d ? e + 1 - d : e + 1;
            changeImage(+1)
        });
    }
    showImage(3000);

    $(".title_s div").click(function(){
         $("#info_content .information").hide();
         var name=$(this).attr("id");
         $("#"+name+"_con").show();
        })
     })
