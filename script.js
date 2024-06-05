let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('.reset');
let newbtn = document.querySelector('.newgame');
let winnerText = document.querySelector('.winner');
let turnO = true;

const winningPattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
boxes.forEach(box => {
    box.addEventListener('click',()=>{
        console.log('box is clicked');
        if(turnO){
            box.innerHTML = 'O';
            turnO = false;
        }else{
            box.innerHTML = 'X';
            turnO = true;
        }
        box.disabled=true
        checkWin();
    })
});

const checkWin = () => {
    for(pattern of winningPattern){
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(boxes[pattern[0]].innerHTML,boxes[pattern[1]].innerHTML,boxes[pattern[2]].innerHTML);
        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos2Val = boxes[pattern[1]].innerHTML;
        let pos3Val = boxes[pattern[2]].innerHTML;
        
        if(pos1Val !='' && pos2Val !='' && pos2Val !=''){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                winnerText.innerHTML=`Winner is <span>${pos1Val}</span> !!`
                boxes[pattern[0]].classList.add('checked');
                boxes[pattern[1]].classList.add('checked');
                boxes[pattern[2]].classList.add('checked');
                for(let box of boxes){
                    box.disabled=true;
                }
            }
        }
    }
}
resetbtn.addEventListener('click',() => {
    for(box of boxes){
        box.innerHTML='';
        winnerText.innerHTML=''
        box.classList.remove('checked')
        box.disabled=false;
    }
})
newbtn.addEventListener('click',() => {
    for(box of boxes){
        box.innerHTML='';
        winnerText.innerHTML=''
        box.classList.remove('checked')
        box.disabled=false;
    }
})