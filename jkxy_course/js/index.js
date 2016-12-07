$(document).ready(function() {
    // 搜索按钮
    $("#search-btn").click(function() {
        $("#searchbox").addClass("scale");
    });
    $("#close-icon").click(function() {
        $("#searchbox").removeClass("scale");
    });
    // 搜索按钮结束

    //lesson-list li标签的hover
    var lis = $("#lesson-list ul li");
    lis_bg_hover(lis);
    lis_hover(lis);

    function lis_hover(lis) {
        lis.each(function() {
            $(this).hover(function() {
                // 文字部分的增长
                $(this).find(".lesson-info").animate({
                    height: "155px"
                }, {
                    duration: 500,
                    quequ: false
                });
                // P元素的伸缩
                $(this).find("p").css("display", "block");
                $(this).find("p").animate({
                    opacity: 1,
                    height: "52px"
                }, {
                    duration: 500,
                    quequ: false
                });
                $(this).find(".zhongji").css("display", "block");
                $(this).find(".learn-num").css("display", "block");
            }, function() {
                $(this).find(".lesson-info").animate({
                    height: "88px"
                }, {
                    duration: 500,
                    quequ: false
                });
                $(this).find("p").animate({
                    opacity: 0,
                    height: "0"
                }, {
                    duration: 500,
                    quequ: false,
                    complete: function() {
                        $(this).find("p").css("display", "none");
                    }
                });
                $(this).find(".zhongji").css("display", "none");
                $(this).find(".learn-num").css("display", "none");
            });
        });
    }
    // 去除hover
    function lis_remove_hover(lis) {
        lis.each(function() {
            $(this).unbind("mouseenter").unbind("mouseleave");
        });
    }
    // 背景图片的hover
    function lis_bg_hover(lis) {
        lis.each(function() {
            // 背景图片的显示
            $(this).hover(function() {
                $(this).find(".lesson-play").animate({
                    opacity: 1
                }, {
                    duration: 100,
                    quequ: false
                });
            }, function() {
                $(this).find(".lesson-play").animate({
                    opacity: 0
                }, {
                    duration: 500,
                    quequ: false
                });
            });
        });
    }
    // 快捷按钮与列表按钮
    var kuai_icon = $("#kuai-icon");
    var list_icon = $("#list-icon");
    var lesson_list = $("#lesson-list");
    kuai_icon.on("click", function() {
        // 重复按键判断
        if (lesson_list.hasClass("lesson-list")) {
            return;
        }
        // 绑定hover
        lis_hover(lis);
        // 去除表格模式类
        lesson_list.removeClass("lesson-list2");
        // 增加快捷模式类
        lesson_list.addClass("lesson-list");
    });
    list_icon.on("click", function() {
        // 重复按键判断
        if (lesson_list.hasClass("lesson-list2")) {
            return;
        }
        // 去除hover
        lis_remove_hover(lis);
        // 添加bg_hover
        lis_bg_hover(lis);
        lesson_list.removeClass("lesson-list");
        lesson_list.addClass("lesson-list2");
    });
    //回到顶部按钮
    var goTop = $(".top");
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            goTop.css("display", "block");
        } else {
            goTop.css("display", "none");
        }
    });
    goTop.click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
        return;
    });
});
