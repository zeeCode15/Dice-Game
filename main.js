
function Gamefunction()
{

    let randomNumber1= Math.random();
    randomNumber1= Math.floor(6*randomNumber1)+1;
    document.querySelector(".img1").setAttribute('src', 'images/dice'+ randomNumber1 + '.png');
    
    let randomNumber2= Math.random();
    randomNumber2= Math.floor(6*randomNumber2)+1;
    document.querySelector(".img2").setAttribute('src', 'images/dice'+ randomNumber2 + '.png');
    
    
    if(randomNumber1>randomNumber2)
    {
        document.querySelector("h1").innerHTML= "Player 1 Wins! 🥇"
        
    }
    else if( randomNumber1< randomNumber2)
    {
        document.querySelector("h1").innerHTML= "Player 2 Wins! 🥇"
        
    }
    else
    {
        document.querySelector("h1").innerHTML= "Draw! 😏"
        
    }
}


document.querySelector("#btn").addEventListener("click", Gamefunction );

