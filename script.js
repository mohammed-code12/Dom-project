let status1 = document.querySelector("h5");
let btn = document.querySelector("#add");
let check = 0;
// let removeFriend = document.querySelector("#remove");
btn.addEventListener("click",function(){
    if(check === 0){
        status1.innerHTML = "Friends"
        status1.style.color = "green"
        btn.innerHTML = "Remove Friend"

        check = 1
        
    }else{
        status1.innerHTML = "Stranger"
        status1.style.color = "red"
        btn.innerHTML = "Add Friend"

      
        check = 0
    }
})
// removeFriend.addEventListener("click",function(){
//     status1.innerHTML = "Stranger"
//     status1.style.color = "red"
// })