function abc(){
let std_total_marks = document.getElementById("tm1").value;
let std_obt_marks = document.getElementById("obt1").value;
res = std_obt_marks / std_total_marks *100;
alert (`dear you have got it ${res} `)
document.getElementById("change").innerHTML = (`<h1> Dear you have got it ${res} </h1>`)
console.log(`<h1> Dear you have got it ${res} </h1>` )
}
