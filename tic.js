let btn=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#reset-btn");
let nGamebtn=document.querySelector("#nGame");
let msg_container=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let turn0=true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
btn.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText='O';
            turn0=false;
        }
        else{
            box.innerText='X';
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const enableboxes=()=>{
    for(let box of btn){
        box.disabled=false;
        box.innerText="";
    }
};
const disableboxes=()=>{
    for(let box of btn){
        box.disabled=true;
    }
};
const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is "${winner}" 🎉 `;
    msg_container.classList.remove("hide");
    disableboxes();
};
const checkWinner=()=>{
    for(let pattern of winpatterns){
        let pos1val=btn[pattern[0]].innerText;
        let pos2val=btn[pattern[1]].innerText;
        let pos3val=btn[pattern[2]].innerText;
        if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val&&pos2val===pos3val){
                console.log("Winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
};
const resetGame=()=>{
    turn0=true;
    enableboxes();
    msg_container.classList.add("hide");
};
nGamebtn.addEventListener("click",resetGame);
reset_btn.addEventListener("click",resetGame);