var info;
$(document).ready(function () {

});

$(".btn").click(function (event) {
    var id = event.target.id;
    if (id == 1){
        $(".view").html("<img src='http://s1.1zoom.me/b6451/191/The_Great_Wall_of_China_Mountains_Forests_538698_1920x1080.jpg' style='width: auto;height: 500px;'>")
    }else if(id ==2){
        $(".view").html("<img src='https://www.nordicvisitor.com/images/iceland/summer/kirkjufell-snaefellsnes-west-iceland.jpg' style='width: auto;height: 500px;'>");
    }else if(id == 3){
        $(".view").html("<img src='http://www.topthingz.com/wp-content/uploads/2014/12/Caribou-and-Mount-McKinley-Denali-National-Park-Alaska.jpg' style='width: auto;height: 500px;'>");
    }

});

var $doc = $(document),
    $win = $(window),
    $svg = $('svg').drawsvg(),
    max = $doc.height() - $win.height();
$win.on('scroll', function() {
    var p = $win.scrollTop() / max;
    $svg.drawsvg('progress', p);

});