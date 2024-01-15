function diceRoller(){
    const numOfDice=document.getElementById("numOfDice").value;
    const diceResult=document.getElementById("diceResult");
    const imageResult=document.getElementById("imageResult");
    const values=[];
    const images=[];
     for(let i=0; i<numOfDice; i++){
        const num=Math.floor(Math.random()*6)+1;
        values.push(num);
        images.push(`<img src="dice_images/${num}.png">`);
     }
     diceResult.textContent=`Dice: ${values.join(', ')}`;
     imageResult.innerHTML=images.join('');
}



