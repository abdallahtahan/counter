var counter = 0;
 function increment(){
    counter++
   document.getElementById("demo").innerHTML =counter;


}
 function decrement(){
    counter--
   document.getElementById("demo").innerHTML =counter;


}
function dolar(){
var x = document.getElementById("tx").value;
   var y = document.getElementById("rel");
   

   if(x==""){
     
      y.innerHTML="enter data";

   }

else if (x<=0){
   y.innerHTML="enter postive num";


}
else if(isNaN(x)){
 y.innerHTML="enter  num";
}





else{
    y.innerHTML = x * 50;

 }
   
 document.getElementById("sorry").innerHTML=" اسف علي التاخير يا بشمهندس ";
   return false;



}


