var isStatus = document.querySelector("h3");
var add=document.querySelector(".add");

var flag=0;
add.addEventListener("click", function(){
    if(flag==0){
        isStatus.innerHTML="Friends";
        isStatus.style.color="green";
        add.innerHTML="Remove Friend"
        add.style.backgroundColor="red";
        flag=1;
    }else{
        isStatus.innerHTML="Stranger";
        isStatus.style.color="red";
        add.innerHTML="Add Friend"
        add.style.backgroundColor="green";
        flag=0;
    }
   
})



