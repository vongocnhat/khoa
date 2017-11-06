$(function(){
    var scrollbar_width = scrollbarWidth();
    $(".new_detail_ajax").click(function (e){
        e.preventDefault();
        e.stopPropagation();
        // $.ajax({
        //     url: "news.html",
        //     success: function(data) {
        //         console.log(href);
        //     }
        // });
        // $(".dialog").show(500);
        $(".dialog").addClass("show").animate({scrollTop:0}, 0);
        $("body").css({"overflow": "hidden", "margin-left": -scrollbar_width});
        $(".menu-top").css("left", -scrollbar_width);
    });
    $(".dialog .news").click(function (e){
        e.stopPropagation();
    });
    $("body").click(function (){
        $(".dialog").removeClass("show");
        $("body").css({"overflow": 'auto', "margin-left": "0"});
        $(".menu-top").css("left", "0");
    });
    $(".btnClose").click(function () {
        $("body").click();
    })
});