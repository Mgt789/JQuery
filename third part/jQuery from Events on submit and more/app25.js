$('<select>').appendTo('.main');
for(let i=0;i<5;i++){
    const val = `${i+1} Value`;
    $('<option>').val(val).text(val).appendTo('select');
}

$('select').change(function(){
    $('.output').text($(this).val());
})

$('input[type="text"]').change(function(){
    $('.output').text($(this).val());
})

$(':input').select(function(){
    $('.output').text($(this).val());
})

$('.main').submit(function(e){
    e.preventDefault();
    console.log('form submitted');
})

$('#btn1').click(()=>{
    $('.main').submit();
})