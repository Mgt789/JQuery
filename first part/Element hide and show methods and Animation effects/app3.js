console.log($('div').first()); //select the first element of the code

const val='<h1>Meher</h1>';
$('div').first().html(val);
$('div').last().text(val);

$('div').click((e)=>{
    const $el=$(e.target);
    console.log($el);
    $el.html('clicked');
    $(e.target).text('Ready');
    $(e.target).hide("slow");
});

$('button').click((e)=>{
    $('div').show("fast");
    $('h1').show("slow");
});

function eleClicker(e) {
    console.log(e);
}