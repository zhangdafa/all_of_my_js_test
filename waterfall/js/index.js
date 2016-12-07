$(document).ready(function() {
    imgLocation();
    var imgData={"data":[{"src":"1.jpg"},{"src":"2.jpeg"},{"src":"3.png"},{"src":"4.jpg"},{"src":"5.jpeg"}]};
    $(window).on("scroll",function(){
    	// 每次达到滚动区间 便利JASON字符串并动态创建元素
    	if (scroll_side()) {
    		$.each(imgData.data,function(index,value){
    			var box=$("<div>").addClass("box").appendTo($("#container"));
    			var box_img=$("<div>").addClass("box_img").appendTo(box);
    			$("<img>").attr("src","./images/"+$(value).attr("src")).appendTo(box_img);
    		});
    		// 刷新定位
    		imgLocation();
    	}
    });
    // resize
    $(window).on("resize",function(){
    	imgLocation();
    });

});
function scroll_side(){
	var box=$(".box");
	// 刷新高度
	var lastBoxHeight=box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
	// console.log(lastBoxHeight);
	// 当前容器高度
	var documentHeight=$(window).height();
	// 滚动高度
	var scrollHeight=$(window).scrollTop();
	return lastBoxHeight<documentHeight+scrollHeight;
}
function imgLocation() {
    // 盒子对象
    var box = $(".box");
    // 盒子宽度
    var box_width = box.eq(0).width(); //并不涉及padding
    // 一行的摆放个数
    var num = Math.floor($(window).width() / (box_width+10));
    var boxHeightArr = [];
    box.each(function(index, value) {
    	// resize需要每次便利的css初始化
    	value.style.cssText="";
        // 初始化数组
        if (index < num) {
            boxHeightArr[index] = box.eq(index).height();
            // console.log(box.eq(index).position().left);
        } else {
            // 获取最小高度
            var minBoxHeight = Math.min.apply(null, boxHeightArr);
            // console.log(minBoxHeight);
            // 获取最小高度的位置
            var minBoxIndex = $.inArray(minBoxHeight, boxHeightArr);
            // 进行定位
            box.eq(index).css({
                position: "absolute",
                top: minBoxHeight,
                left: box.eq(minBoxIndex).position().left
            });
            // 最小高度的刷新
            boxHeightArr[minBoxIndex] += box.eq(index).height();
        }
    });

}
