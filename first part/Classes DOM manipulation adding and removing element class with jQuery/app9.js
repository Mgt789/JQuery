$('div').click(function(){
    console.log($(this));

    //check class exist or not
    const boo = $(this).hasClass('red');
    console.log(boo);

    if(boo){
        $(this).text('Already Red!!!');
    }
    else{
        $(this).text('Changed to Red');
    }

    $(this).addClass('red');
    $(this).removeClass('blue');
})

$('#btn1').click(()=>{
    $('div').addClass('blue');
})

$('#btn2').click(()=>{
    $('div').toggleClass('red');
    $('div').toggleClass('blue');
})