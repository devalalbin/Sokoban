var playerposX = 11;
var playerposY = 11;//starting pos for player

/*a function to generate the elements that will represent the tiles from the 
map array*/
function drawMap(tileMap){
    var temp;

    for(let x = 0; x < tileMap.height; x++)
    {
        for(let y = 0; y < tileMap.width; y++)
        {
       
            if(tileMap.mapGrid[x][y]== "W"){
                console.log("Wall");
                /* Map each entity to a color*/
                temp=document.createElement('div');
                temp.className = 'wall';
                           
            }
            else if (tileMap.mapGrid[x][y]== "B"){
                console.log("BLOCK");
                temp=document.createElement('div');
                temp.className = 'block';
                temp.innerHTML = "block";
                
               
            }else if (tileMap.mapGrid[x][y]== "P"){
                console.log("PLAYER");
                temp=document.createElement('div');
                temp.className = 'player';
                temp.innerHTML = "<img src=\'player.png'>";
                temp.id = "x"+x+"y"+y;
                     
            }
            else if (tileMap.mapGrid[x][y]== "G"){
                console.log("GOAL");
                temp=document.createElement('div');
                temp.className = 'goal';    
            }
            
            else if (tileMap.mapGrid[x][y]== " "){
                console.log("EMPTY SPACE");
                temp=document.createElement('div');
                
            }

            temp.id = "x"+x+"y"+y; /*sets id of class with their tile location */
            document.getElementById('map').append(temp);

        }
        
    }
}
function gameLogic(x,y){ /* takes player class and spot it want to move to and 'swaps' their id and class*/
   //tracking 3 pos, current player pos / space you want to move pos / and space you want to move in +1
    var oldPos = "x"+(playerposX)+"y"+(playerposY);
    var newPosX = (playerposX +x);
    var newPosY = (playerposY +y);
    var newPos = "x"+(newPosX)+"y"+(newPosY);
    var stepaheadPosX = (playerposX +x+x);//variables to check 1 step ahead
    var stepaheadPosY = (playerposY +y+y); 
    var stepaheadPos= "x"+(stepaheadPosX)+"y"+(stepaheadPosY);

    

    if(document.getElementById(newPos).className != 'wall' && document.getElementById(newPos).className != 'block' && document.getElementById(newPos).className != 'goal block'){
         //check if new pos is a wall or block, and if its not update player pos
        document.getElementById(oldPos).innerHTML = "";
        document.getElementById(oldPos).classList.remove("player")
        document.getElementById(newPos).innerHTML = "<img src=\'player.png'>";
        document.getElementById(newPos).classList.add("player"); // replace block class with player in  new pos

        playerposX = newPosX;
        playerposY = newPosY;
        
    }
    if(document.getElementById(newPos).className == 'block' || document.getElementById(newPos).className == 'goal block'){ //pushing block logic
        if(document.getElementById(stepaheadPos).className != 'wall' && document.getElementById(stepaheadPos).className != 'block' && document.getElementById(stepaheadPos).className != 'goal block' ){
            //checking position ahead to see if a push is possible
            console.log(document.getElementsByClassName('goal block').length); //checking
            document.getElementById(oldPos).innerHTML = "";
            document.getElementById(oldPos).classList.remove("player");

            document.getElementById(newPos).classList.remove("block");
            document.getElementById(newPos).classList.add("player"); // replace block class with player in  new pos
            document.getElementById(newPos).innerHTML = "<img src=\'player.png'>";

            document.getElementById(stepaheadPos).innerHTML = "block";
            document.getElementById(stepaheadPos).classList.add("block");

            playerposX = newPosX;
            playerposY = newPosY;     
        } 
    }    
    winCondition();     

};

window.onscroll = () => { window.scroll(0, 0); }; // makes page unscrollable

function winCondition(){
    console.log(document.getElementsByClassName('goal block').length); //checking how many "goal blocks" we have
    if(document.getElementsByClassName('goal block').length == 6){
        alert("YOU WON! Congratulations");
    }

};


document.addEventListener('keyup', logKey)
function logKey(e)
{
    e.preventDefault()
    switch (e.key) {
        case 'ArrowLeft':
            gameLogic(0,-1);
            break;
        case 'ArrowRight':
            gameLogic(0,1);
            break;
        case 'ArrowUp':
            gameLogic(-1,0);
            break;
        case 'ArrowDown':
            gameLogic(1,0);
            break;
    }
    
};

drawMap(tileMap01);
