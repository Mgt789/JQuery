$('#btn1').click(function(){
    console.log($(this).parent().length);
    console.log($(this).parents().length);
    console.log($(this).parents());
    console.log($(this).parents('.main'));
    console.log($(this).parentsUntil('nav'));
})

$('#btn2').click(function(){
    $(this).parents('.main').each(function(){
        $(this).addClass('parentM');
    })
});