$('#btn1').click(() => {
    const temp = $('.main div').get(1);
    console.log(temp); //fetch the whole div tag
    console.log(temp.innerHTML); // fetch the html code only
    console.log(temp.textContent); //fetch the content only
})

$('#btn2').click(() => {
    const len = $('.main div').length;
    console.log(len);
    let html = '';
    for (let i=0; i<len; i++) {
        const temp = $('.main div').get(i);
        console.log(temp.textContent);
        html += `${i}.${temp.textContent}`;
    }
    $('.main .span1').text(html);
})
