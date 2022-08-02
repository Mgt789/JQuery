$('#btn1').click(adder);
let counter = 0;

function adder(){
    const val = $('input').val();
    console.log(val);

    //value add in the top of the input box
    const $li = $('<li>');
    const $el = $('<span>').text(val);
    const $btn = $('<button>').text('X');

    $el.click(function(){
        $li.toggleClass('red');
    })

    $btn.click(function () {
       $li.remove();
    })
    $li.append($el).append($btn);
    $('.output').append($li);
    counter++;
    const temp = `Meher ${counter}`;
    $('input').val(temp);

}