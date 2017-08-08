var $count = $('#count');
var $link = $('#link,#taget');
var time = 7;
var id = setInterval(function () {
    console.log(time); //TODO: удали меня
    if (time <= 0) {
        window.location.replace($link.attr('href'));
        clearInterval(id);
        $count.remove();
    } else {
        time--;
        $count.text('('+time+')')
    }
}, 1000);

$link.click(function () {
    clearInterval(id);
    $count.remove();
});
