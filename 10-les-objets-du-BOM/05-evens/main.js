let p1 = document.querySelector('p');

p1.addEventListener('click', function(){
    this.innerHTML="<h2>Bravo, vous venez de me cliquez !!!</h2>";
    this.style.color = "red";
    this.style.textTransform = "uppercase";
});

let p2 = document.querySelector('p')[1];
console.log(p2);

p2.addEventListener('mousedown', function(){
    this.innerHTML="<h2>Bravo, vous venez de me survolez!!!2</h2>";
    this.style.color = "blue";
    this.style.textTransform = "capitalize";
});

p2.addEventListener('mousedown', function() {
    this.innerHTML = "<h2>Bravo, vous venez de me rater!!!2</h2>";
    this.style.color = "orange";
})