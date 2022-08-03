let counter = 0;

const arr = [];
//add 4 checkbox in the div4
for(let i=0; i<5; i++){
    // $ele = $('<input>');
    $('<input>').attr({
        type:'checkbox',
        value:i,
        checked:'checked'
    }).appendTo('.div3').click(function(){
        checkerInput($(this));
    });
}

//add 4 checkbox in the div3
for(let i=0; i<5; i++){
     $ele = $('<input>');
    $ele.attr({
        type:'checkbox',
        value:i
    }).appendTo('.div4');
    $ele.prop('checked',true);
    $ele.click(function(){
        checkerInput($(this));
    })
}

//checker function
function checkerInput($el) {
    let temp = '';

    temp += `<div>Attr : ${$el.attr('checked')}</div>`;
    temp += `<div>Prop : ${$el.prop('checked')}</div>`;
    temp += `<div>Is : ${$el.is(':checked')}</div>`;
    
    $('.div1').html(temp);
}


$('.div2').click(function(){
    counter++;
    $('.div1').html(`<div>Counter ${counter}</div>`);
})

$('div').click(function(){
    console.log($(this).attr('id'));
    const ran = Math.floor(Math.random()*1000);
    $(this).attr('id',`id ${ran}`);
})

$('#btn1').click(()=>{
   // $('.div1').addClass('box').empty();

    if(arr.length > 0){
        $ele = arr.shift();
        $ ('.div4').append($ele);
    }

    $('input').attr({
        type:'number',
        min:'0',
        max:'10',
        value:'5'
    });
})

$('#btn2').click(()=>{
    //$ele = $('.div1').detach();
    //arr.push($ele);
})