let counter=0;
for(let i=0; i<10; i++){
    counter++;
    const $span = $(`<span>Hello :${counter}</span>`);
    $span.text('New');
    $('.div2').append($span); 
}

for(let i=0; i<3; i++){
    const $btn = $(`<button>After ${i+1}</button>`);
    $('.div4').after($btn); 
    $btn.click(function(){
        console.log($(this).text());
    })
    $(`<button>iBefore ${i+1}</button>`).
    insertBefore('.div4').click(function(){
        console.log($(this).text());
    })
}

for(let i=0; i<3; i++){
    const $btn = $(`<button>iAfter ${i+1}</button>`);
    // $('.div4').before($btn); 
    $(`<button>iAfter ${i+1}</button>`)
    .insertAfter('.div4').click(function(){
        console.log($(this).text());
    });
}


$('#btn1').click(()=>{
    const val=$('input').val();

    //console.log($('input').val()); //print the input box text in the console
   $('.div1').text(val); 
   $('.div2').append(val); 
   $('.div3').prepend(val); 
   $('.div4').remove(); 

})

$('#btn2').click(()=>{
    counter++;
    const $div = $(`<div>Hello :${counter}</div>`);
    $('.div3').append($div);
    console.log($div);
})