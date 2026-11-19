var fruits = ['Apple', 'Banana', 'Mango', 'Strawberry']

document.getElementById("myfirstJoin").innerHTML = fruits.join(" * ")
document.getElementById("myfirstPop").innerHTML = fruits;
fruits.pop()
document.getElementById("mysecondPop").innerHTML = fruits;