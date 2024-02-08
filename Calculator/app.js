function display(val){
let a = document.getElementById("screen").value += val;
}
function calculate(){

    let a = document.getElementById("screen").value;
    let b;
   try{
    b = eval(a);
   }
   catch(e)
   {
    alert(e);
   }

    document.getElementById("screen").value = b;
}
function clearScreen(){
    document.getElementById("screen").value = " ";
}
function Delete(){
   let a = document.getElementById("screen").value;
  let d = a.slice(0,-1); 
   document.getElementById("screen").value = d;

}