$('<div>').text('Chandan Meher').addClass('box').prependTo(document.body);

$('.box').on({
    click : function(){$(this).toggleClass('active')},
    mouseenter:function(){$(this).css('background-color','blue')},
    mouseleave:function(){$(this).css('background-color','white')}

})

$('.btns').on('click','button',function(){
    const val = `${$(this).index()} index button`;

    $('.output').text(val);
})
const obj = {
    first : 'Chandan',
    last : 'Meher',
    id : 100
}
$('.output').on('click',obj,adder);

function adder(e){
    console.log(e.data);
}

for(let i=0;i<5;i++){
    const temp = `${i+4}`;
    $('<button>').text(temp).appendTo('.btns');
    
}


$('.btns button').click(function(){
    const val = `${$(this).index()} index button`;
    $(this).css('background-color','red');
    console.log(val);
})