let btns=document.querySelectorAll(".box");
let msg = document.querySelector(".msg");
let newgame = document.querySelector('.newgame');
let regame = document.querySelector(".restgame");
let container = document.querySelector(".message");
let cnt=0;
let turn0=true;

for(let btn of btns)
{
    btn.addEventListener("click",()=>{
        if(turn0)
        {
            btn.innerText="O";
            turn0=false;
        }
        else
        {
            btn.innerText="X";
            turn0=true;
        }
        btn.disabled=true;
        cnt++;
        winner();
    })
}
const disable=()=>{
    for(let btn of btns)
    {
        btn.disabled=true;
    }
}
const enable=()=>{
    for(let btn of btns)
    {
        btn.disabled=false;
        btn.innerText="";
    }
}
const printing=(idx)=>{
    msg.innerText=`congrats !! ${idx} won the game...`;
    container.classList.remove('show');
}
const draw=()=>{
    msg.innerText=`the game was draw...`;
    container.classList.remove('show');
}
let possibles=[
    [0,1,2],[0,3,6],[0,4,8],
    [3,4,5],[1,4,7],[2,4,6],
    [6,7,8],[2,5,8]
];
const winner=()=>{
    for(let patt of possibles)
    {
        if(cnt===9)
        {
            disable();
            draw();
        }
        let pos1=btns[patt[0]].innerText;
        let pos2=btns[patt[1]].innerText;
        let pos3=btns[patt[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1===pos2 && pos2==pos3)
            {
                disable();
                printing(pos1);
            } 
        }
    }
}

newgame.addEventListener("click",()=>{
    turn0=true;
    enable();
    container.classList.add('show');
});
regame.addEventListener("click",()=>{
    turn0=true;
    enable();
    container.classList.add('show');
});