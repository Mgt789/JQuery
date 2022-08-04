$('#btn1').click(()=>{
    console.log($('.main').children());
    $main = $('.main').children();
    $main.first().css('color','red');
    $main.last().css('color','blue');
    $main.eq(7).css('color','green');
    $main.eq(6).css('background-color','green');
})

$('#btn2').click(()=>{
    $main = $('.main').children();
    $btns = $main.filter('button');
    $btns.css('background-color','black');
    $btns.css('color','white');
})

$('#btn3').click(()=>{
    $main = $('.main').children();
    $btns = $main.not('button');
    $btns.css('background-color','purple');
    $btns.css('color','white');
})

$('#btn4').click(()=>{
    $('.main div').not('.div1').css('color','red');
})

$('#btn5').click(()=>{
    $('.main div').filter('div').css('color','green');
})