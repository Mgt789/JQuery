let counter = 0;
let temp = '';
$('input').val("meher");
$('.main div').click(function(){
    $(this).data('past',$(this).text());
    counter++;
    const temp = $('input').val();
    const html = `${temp} Counter : ${counter}`;
    $(this).html(html);
})
// 1
$('#btn1').click(()=>{
    const val = $('.div1').data('past');
    $('.div1').text(val);
    console.log(val);
})
// 2
$('#btn2').click(()=>{
    const val = $('.div2').data('past');
    $('.div2').text(val);
    console.log(val);
})
// 3
$('#btn3').click(()=>{
    const val = $('.div3').data('past');
    $('.div3').text(val);
    console.log(val);
})
// 4
$('#btn4').click(()=>{
    const val = $('.div4').data('past');
    $('.div4').text(val);
    console.log(val);
})
