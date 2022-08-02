const val = '<h3>Meher</h3>';
$('div').first().html(val);

let counter = 0;
let hiddenEle = 0;
let fader=0.5;
$('div').click(function (e) {
    //  $(e.target).fadeOut(1000);
    console.log($(this));
    console.log($(this).text());
    $(this).fadeOut(1000, () => {
        counter++;
        hiddenEle++;
        const temp = `<h3>Counter ${counter}</h3>`;
        $(this).html(temp)

        //print the counter in the button
        $('button').text(`Show(${hiddenEle})`);
    });
})

$('button').click((e) => {
    // $('div').fadeIn("slow");

    // $('div').fadeToggle('slow',function(){
    //     $(this).text('Was toggled');
    // })

    // regular toggle
    $('div').toggle(1500);

    //value reset in the button
    hiddenEle = 0;
    $('button').text(`All Showing`);
    $('button').fadeTo('slow',fader,()=>{
         if(fader == 0.5){
            fader=1;
         }
         else{
            fader=0.5;
         }
    })
})