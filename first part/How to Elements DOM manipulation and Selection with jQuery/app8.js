$('#btn1').click(()=>{
    $('<h3>Hello</3>').replaceAll('.div3');
    $('.div2').replaceWith('<h3>Hello 3</h3>');
})

$('#btn2').click(()=>{
    const $ele = $('#myIn').clone();
    console.log($ele);
    const temp = $('#myIn').val();
    $('input').last().clone().prependTo('div');
    // $ele.clone().prependTo('div');
})