var $ = require('jquery');
var _ = require('underscore');

var shirts = [];
var retrievedShirts = [];

//if statement to check if the counter is undefined, if it is, set counter to 1.

//getItem to get saved counter number, then loop thru based on number.
//Make sure you parseInt the counter value


//for loop that loops based on the count of counter and in the for loop
//I am appending to the cart space, I'm retrieving the localStorage info using .getItem
//to display the selected options.

$('#cart1').click(function(e){
  e.preventDefault();
  var name = $('#name').html();
  var quantity = $('.quantity').val();
  var size = $('.select option:selected').html();
  var time = (new Date().getHours() * 60) + new Date().getMinutes();
  var selectionInfo = {name: name, quantity: quantity, size: size, time: time};
  shirts.push(selectionInfo);
  localStorage.setItem('OrderInfo', JSON.stringify(shirts));
});

$('#cart2').click(function(e){
  e.preventDefault();
  var name = $('#name2').html();
  var quantity = $('.quantity2').val();
  var size = $('.select2 option:selected').html();
  var time = (new Date().getHours() * 60) + new Date().getMinutes();
  var selectionInfo = {name: name, quantity: quantity, size: size, time: time};
  shirts.push(selectionInfo);
  localStorage.setItem('OrderInfo', JSON.stringify(shirts));
});

$('#cart3').click(function(e){
  e.preventDefault();
  var name = $('#name3').html();
  var quantity = $('.quantity3').val();
  var size = $('.select3 option:selected').html();
  console.log(new Date().getHours())
  var time = (new Date().getHours() * 60) + new Date().getMinutes();
  var selectionInfo = {name: name, quantity: quantity, size: size, time: time};
  shirts.push(selectionInfo);
  localStorage.setItem('OrderInfo', JSON.stringify(shirts));
});

// console.log(localStorage.getItem('OrderInfo'));

// console.log(localStorage.OrderInfo);
var retrievedShirtshirts = JSON.parse(localStorage.getItem('OrderInfo'));
var currentTime = (new Date().getHours() * 60) + new Date().getMinutes();
var cartRow = retrievedShirtshirts.map(function(item, index){
  var loggedTime = item.time;
  console.log(currentTime);
  console.log(loggedTime);
  var cookieTime = Math.floor((currentTime - loggedTime)) + 1;
  $('#table-row').append('<tr><th>' + index + '</th><td>' + item.name + '</td><td>' + item.size + '</td><td>' + item.quantity + '</td><td>' + cookieTime + ' mins' + '</td><td><button class="btn btn-danger remove">Remove</button></td></tr>');
});

$('.remove').click(function(e){
  e.preventDefault();
  $(this).parent().parent().remove();
});
$('.checkout').click(function(){
  localStorage.removeItem('OrderInfo')
  location.reload();
  $(this).append()
})
