var score= document.getElementById("score");
var num1= document.getElementById("num1");
var num2 = document.getElementById("num2");
var input_field=document.getElementById("input-field");
var btn=document.getElementById("btn");

random();

function random(){
var v1= parseInt(Math.ceil(Math.random()*10));
var v2 = parseInt(Math.ceil(Math.random()*10));
num1.innerHTML=v1;
num2.innerHTML=v2;
}

var counter= 0 ;


btn.addEventListener('click',()=>{
if((num1.innerHTML)*(num2.innerHTML)===parseInt(input_field.value))
{
 counter++;
 score.innerHTML=counter;
 random();
}
else if(input_field.value=='')
{
alert("Please enter some value , so that we can check your answer")
}
else{
    alert("You have entered wrong number , Please try again : ) ")
    counter--;
    score.innerHTML=counter;
}
input_field.value='';
})


