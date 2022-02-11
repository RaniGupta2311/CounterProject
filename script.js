console.log("Welcome to Counter Project");
let count=0;
const val=document.querySelector('#currCount');
const btns=document.querySelectorAll('.btn');
//console.log(btns);

btns.forEach(function(btn){
    btn.addEventListener("click",function(ev){
        const styles=ev.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }
        else if(styles.contains("increase")){
            count++;
        }
        else{
            count=0;
        }
        if(count>0)
        val.style.color="green";
        if(count<0)
        val.style.color="red";
        if(count===0)
        val.style.color="#222";

        val.textContent=count;
    });
});