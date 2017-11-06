function scrollbarWidth() { 
    var div = $('<div style="width:50px;height:0;overflow:hidden;"><div style="height:0;"></div>');
    // Append our div, do our calculation and then remove it 
    $('body').append(div);
    var w1 = $('div', div).innerWidth();
    div.css('overflow-y', 'scroll');
    var w2 = $('div', div).innerWidth();
    $(div).remove();
    return (w1 - w2);
}
//function of news-detail pagination
function fixedPagination() {
	var top = $("#nd .container-news-detail").offset().top;
	var left = $("#nd .container-news-detail").offset().left;
    $("#nd .news-pagination-nav").css({"top":  top, "right": left});
}
///function of news-detail pagination
// $("body").on("mousedown", function (){
//     $(this).on("mousemove", function () {
//         console.log("ec ec");
//     })
// });

// $(document).on('mousedown', function() {
//     $(document).bind('mousemove', function() {
//         console.log("ec ec");
//     });
// });


// $(document).on('mouseup', function() {
//     $(document).unbind('mousemove');
//     console.log("ec ec2");
// });

// $(function(){
//     var clicked = false;
//     $(document).mousedown(function(){
//         console.log("xuong");
//         clicked = true;
//     });

//     $(document).mouseup(function(){
//         console.log("len");
//         clicked = false;
//     })

//     $(document).mousemove(function(){
//         if(clicked == false)
//             return;
//         console.log("e");
//     });
// });