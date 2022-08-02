const ele1 = $('div');  //select the element by the 'div'
console.log(ele1[0]); //print the element
$('div').html('Hello'); //change all the matching element

const ele2 = $('.div2'); //select the second element by his class named
console.log(ele2); //print that element

const ele3 = $('#div3'); //select the third element by his id
console.log(ele3); //print that element

const ele4 = $('#div3,.div2'); //select two and more element
console.log(ele4); //print that element

//print the element directly without storing
console.log($('div'));
$('div').html('Hello');
console.log($('.div2'));
console.log($('#div3'));
console.log($('#div3, .div2'));