$('#btn1').click(()=>{
    $('div').toggleClass('red');
    $('div').css('width','100px')
})

$('#btn2').click(()=>{
    $('div').toggleClass('blue');
    $('div').css('width','+=50')
})

$('div').click(function(){
    console.log($(this).css('color'));
    console.log($(this).css('background-color'));

    //random-color property added
    const rc = '#' + Math.random().toString(16).substring(2,8);
    const rc2 = '#' + Math.random().toString(16).substring(2,8);

    //change css onclick
    $(this).css('background-color',rc)
    $(this).css('color',rc2)
    
    //display css property
    const temp = $(this).css(['color','background-color',
    'height','font-size','width']);

    let elText = $(this).text();

    let html = `<h1>${elText}</h1><ul>`;
    for(const prop in temp){
        html += `<li>${prop}: ${temp[prop]}</li>`;
    }

    html += '</ul>';
    output(html);
})

$('.div4').click(()=>{
   output('test');
})

function output(val){
    $('.div4').html(val);
}