// Scroll to a certain element
var g = document.getElementById('test-1');
var h = document.getElementById('test-2');
var j = document.getElementById('test-3');
var k = document.getElementById('test-4');


g.addEventListener("click", function() {
  document.querySelector('#box-1').scrollIntoView({ 
  behavior: 'smooth' 
});                   
});


h.addEventListener("click", function() {
  document.querySelector('#box-2').scrollIntoView({ 
  behavior: 'smooth' 
});                   
});

j.addEventListener("click", function() {
  document.querySelector('#box-4').scrollIntoView({ 
  behavior: 'smooth' 
});                   
});

k.addEventListener("click", function() {
  document.querySelector('#box-8').scrollIntoView({ 
  behavior: 'smooth' 
});                   
});
