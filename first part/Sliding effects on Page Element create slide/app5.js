$('#btn2').hide();

$('#btn1').click(()=>{
    $('div').slideUp("slow",doneFun);
})

$('#btn2').click(()=>{
    $('div').slideDown("fast",doneFun);
})

$('div').click(function(){
    $(this).slideToggle();
})

function doneFun(){
    console.log('slide done');

    $('#btn1').toggle();
    $('#btn2').toggle();
}