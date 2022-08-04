const arr = ['Meher','Larry','Mike','Dave','Jane','Mike','Dave','Jane'];

$.each(arr,(ind,val)=>{
    console.log(ind,val);

    let html = `${ind+1} ${val}`;
    $('<div>').html(html).addClass('box').appendTo('.output');
})

$('.box').each(function(){
    $ele = $(this);
    $par = $ele.parent();
    console.log($par);
    const temp = $ele.text();
    $ele.empty();
    $('<span>').text(temp).appendTo($ele);
    $btn1 = $('<button>').text('Up').addClass('btn').appendTo($ele);
    $btn2 = $('<button>').text('Down').addClass('btn').appendTo($ele);

    $btn1.click(function(){
        $sel = $(this).parent().prev()
        if($sel.length > 0){
            console.log($sel);
            $(this).parent().addClass('active');
            $(this).parent().slideUp('slow',
            function(){
                $(this).removeClass('active');
                $(this).insertBefore($sel);
                $(this).slideDown('fast');
            });
            
        }
    })

    $btn2.click(function(){
        $sel = $(this).parent().next()
        if($sel.length > 0){
            console.log($sel);
            $(this).parent().addClass('active');
            $(this).parent().slideUp('slow',
            function(){
                $(this).removeClass('active');
                $(this).insertAfter($sel);
                $(this).slideDown('fast');
            });
        }
    })
})