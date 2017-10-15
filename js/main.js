var $count = $('#count');
var $link = $('#link,#taget');
var time = 6;
var lench = 0;
var id = setInterval(function () {
    console.log(time); //TODO: удали меня
    if (time <= 0) {
        window.location.replace($link.attr('href'));
        clearInterval(id);
        $count.remove();
    } else {
        time--;
        var str='';
        for (var i = 0; i < lench % 4; i++) {
            str += '.';
        }
        lench++;
        $count.text(str)
    }
}, 300);

$link.click(function () {
    clearInterval(id);
    $count.remove();
});
