// console.log( $('.main').children());

$('#btn1').click(()=>{
    const sel = $('input').val();
    if(sel){
        console.log(sel);
        // $(sel).css('background-color','red');
        $('.main').find(sel).css('color','blue');
    }
})

$('#btn2').click(()=>{
    $('.main div').find('*').css('background-color','purple');
})