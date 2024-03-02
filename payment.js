window.addEventListener("load",()=>{
  document.getElementById("ID").textContent=localStorage.getItem("ID");
  document.getElementById("product").textContent=localStorage.getItem("product");
  document.getElementById("price").textContent=localStorage.getItem("price");
  
  var userinput;
  var status = document.getElementById("status");
  document.getElementById("send").onclick = ()=>{
   userinput = document.getElementById("ref").value;
   if(userinput.length==0){
    alert("Please Enter your Payment reference Number!"); 
   }else{
     status.textContent="Processing(3-5mins)";
     status.style.color="yellow"
     alert("Processing!")
   }
  }
})
  
