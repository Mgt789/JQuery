let counter = 1;

$('button').click(()=>{
    counter++;
    const r = Math.floor(Math.random()*200)+100;
    const c  = '#'+Math.random().toString(16).substring(2,8);
    const id = 'id'+counter;
    //adding new div with click
    $('<div>').text('New Div').css('height', r +'px')
    .attr('id',id).css('background-color',c)
    .appendTo('body');
    //output adding ancor tag
    $('<a>').attr('href','#'+id).text(id+' ')
    .appendTo('.output');
})

//display the scrolling value in the console log
$(window).scroll((e)=>{
    console.log(e);
})

//display the screen resize value
$(window).resize((e)=>{
    console.log($(window).height());
    console.log($(document).height());
})