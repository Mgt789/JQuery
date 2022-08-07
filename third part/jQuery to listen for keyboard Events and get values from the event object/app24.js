for(let i=0; i<10;i++){
    const html = `Meher ${i}`;
    adder(html);
}


$('input').keydown(function(e){
    console.log(e.key,e.code);
    $(this).css('background-color','yellow');
    console.log('keydown '+$(this).index());
})

$('input').keypress(function(e){
    console.log(e.key,e.code);
    $(this).css('background-color','red');
    console.log('keypress '+$(this).index());
})

$('input').keyup(function(e){
    console.log(e.key,e.code);
    $(this).css('background-color','white');
    console.log('keyup '+$(this).index());
})

//focus
$('input').focus(function(e){
    $(this).css('color','purple');
    console.log('focus '+$(this).index());
})

$('input').blur(function(e){
    $(this).css('color','green');
    console.log('blur  '+$(this).index());
})

$('input').focusin(function(e){
    $(this).css('color','blue');
    console.log('focusIn '+$(this).index());
})

$('input').focusout(function(e){
    $(this).css('color','pink');
    console.log('focusOut '+$(this).index());
})

function adder(val){
    $('<input>').attr({
        type:'text',
        value: val
    }).appendTo('.main');
}