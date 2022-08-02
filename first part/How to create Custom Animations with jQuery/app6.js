$('#btn1').click(()=>{
    $('.div1').text(`I'm moving`);
    $('.div1').animate({
        left:"+=20",
        opacity:0.5
    },1000,()=>{
        $('.div1').text(`STOPPED`);
    });

    $('.div2').animate({
        left:"+=50",
        fontSize:"20px"
    },3000,()=>{
        $('.div2').text(`Meher`);
    });

    $('.div3').animate({
        top:"+=50",
        width:"150px",
        height:"150px"
    },1000,()=>{
        $('.div2').text(`Meher`);
    });
})

$('#btn2').click(()=>{
    $('.div1').text(`I'm moving`).animate({
        left:"-=50",
        opacity:1
    },1000,()=>{
        $('.div1').text(`STOPPED`);
    });

    $('.div3').animate({
        top:"-=50",
        width:"50px",
        height:"35px"
    },1000,()=>{
        $('.div2').text(`DONE`);
    })
})