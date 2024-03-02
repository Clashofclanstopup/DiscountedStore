var pur = document.getElementById("purchase");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
one.onclick = ()=>{
  localStorage.setItem("product","Goldpass")
  localStorage.setItem("price","₱250");
}
two.onclick = ()=>{
  localStorage.setItem("product","+3 Builder Huts")
  localStorage.setItem("price","₱200");
}
three.onclick = ()=>{
  localStorage.setItem("product","4 Magic Skin")
  localStorage.setItem("price","₱900");
}
four.onclick = ()=>{
  localStorage.setItem("product","Magic King skin")
  localStorage.setItem("price","₱300");
}
five.onclick = ()=>{
  localStorage.setItem("product","Magic Queen Skin")
  localStorage.setItem("price","₱300");
}
six.onclick = ()=>{
  localStorage.setItem("product","Magic Warden Skin")
  localStorage.setItem("price","₱300");
}
seven.onclick = ()=>{
  localStorage.setItem("product","Magic Champion Skin")
  localStorage.setItem("price","₱300");
}
eight.onclick = ()=>{
  localStorage.setItem("product","Magic Scenery")
  localStorage.setItem("price","₱300");
}
nine.onclick = ()=>{
  localStorage.setItem("product","5,100 Gem")
  localStorage.setItem("price","₱500");
}
pur.onclick = () => {
  var ID = document.getElementById("ID")
  if(ID.value.length==0){
    confirm("Fill your Account ID");
  }
  else{
 window.localStorage.setItem("ID",ID.value);
 var Isconfirm = confirm("Press OK if the ID:"+window.localStorage.getItem("ID")+ " is right?");
 if(Isconfirm){
   window.location.href="payment.html";
 }else{
   confirm("Fill your Account ID!");
 }
  }
}