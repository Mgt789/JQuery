$('div').addClass('box').click(function(){
    let html = `<div>Width: ${$(this).width()}</div>`;
    html += `<div>Height: ${$(this).height()}</div>`;
    html += `<div>iWidth: ${$(this).innerWidth()}</div>`;
    html += `<div>iHeight: ${$(this).innerHeight()}</div>`;
    html += `<div>oWidth: ${$(this).outerWidth()}</div>`;
    html += `<div>oHeight: ${$(this).outerHeight()}</div>`;
    $(this).html(html);
});

$('#btn1').click(()=>{
    console.log($(document).width());
    console.log($(window).width());
    console.log($(document).height());
    console.log($(window).height());
})