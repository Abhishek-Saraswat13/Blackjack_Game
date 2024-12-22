let player={
    name:"per",
    chips:200
}
let hasBlackJack=false
let isAlive=false
let res=0
let cards=[]
let message=""
let mesel=document.getElementById("message-el")
let sumel=document.querySelector("#sum-el")
let cardEl=document.querySelector("#card-el")
let playerEl=document.querySelector("#player-el")


playerEl.textContent=player.name+": $"+player.chips

function getRandomCard(){
    let radNum= Math.floor(Math.random()*13)+1
    if(radNum>10){
        return 10
    }
    else if(radNum===11){
        return 11
    }
    else{return radNum}
}

function startGame(){
    isAlive=true
    let fcard=getRandomCard()
    let secard=getRandomCard()
    cards=[fcard,secard]
    res=fcard+secard
    renderGame()
}
function renderGame(){
    sumel.textContent="Sum: "+res
    cardEl.textContent="Card: "//+cards[0]+" "+cards[1]
    for(let i=0;i<cards.length;i++){
        cardEl.textContent+=cards[i]+" "
    }
    if(res<21){
        // console.log("Want to a new card😊")
        message="Want to a new card😊"
    }else if(res===21){
        // console.log("You got blackJack🥳")
        let hasBlackJack=true
        message="You got blackJack🥳"
    }
    else{
        // console.log("You are out of game🥹")
        isAlive=false
        message="You are out of game🥹"
    }
    // console.log(hasBlackJack)
    // console.log(isAlive)
    mesel.textContent=message;
}

function newCard(){
    if(isAlive===true && hasBlackJack===false){
        let card=getRandomCard()
    res+=card
    cards.push(card)
    renderGame()
}
    }
    
// for(let i=0;i<11;i++){
//     console.log(i)
// }


