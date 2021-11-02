function keyPress()
    {
        let el = document.getElementsByName("inputfield2")[0];
        el.classList.add("MyCssClass");
        alert("you added a class to inputfield2 when you pushed a button");
    }

function validateInput()
{
    
    let formValue = document.forms["myForm"]["myFormTextInput"].value;
    if(formValue === "")
    {
        document.getElementById("errorMessage").innerHTML = "Error: input needs a value";
    }
    else{
        document.getElementById("errorMessage").innerHTML = "";

        // Post data to backend..
    }
}

/*a function to generate the elements that will represent the tiles from the 
map array*/
function drawMap(tileMap){

    for(let y = 0; y < tileMap.width; y++)
    {
       /* var col = document.createElement("div"); 
        col.className = "col"; */

        for(let x = 0; x < tileMap.height; x++)
        {
            /*console.log("x:" + x + " y:" + y + " SPOT " ); console.log(tileMap.mapGrid[x][y]);*/
            var temp;

            if(tileMap.mapGrid[x][y]== "W"){
                console.log("Wall");
                /* Map each entity to a color*/
                temp=document.createElement('div');
                temp.className = 'wall';
                temp.innerHTML = "wall";
                document.getElementById('map').append(temp);
            
            }
            else if (tileMap.mapGrid[x][y]== "B"){
                console.log("BLOCK");
                temp=document.createElement('div');
                temp.className = 'block';
                temp.innerHTML = "block";
                document.getElementById('map').append(temp);
               
            }else if (tileMap.mapGrid[x][y]== "P"){
                console.log("PLAYER");
                temp=document.createElement('div');
                temp.className = 'player';
                temp.innerHTML = "player";
                document.getElementById('map').append(temp);
                
            }
            else if (tileMap.mapGrid[x][y]== "G"){
                console.log("GOAL");
                temp=document.createElement('div');
                temp.className = 'goal';
                temp.innerHTML = "goal";
                document.getElementById('map').append(temp);
               
            }
            
            else if (tileMap.mapGrid[x][y]== " "){
                console.log("EMPTY SPACE");
                temp=document.createElement('div');
                temp.className = 'empty';
                temp.innerHTML = "";
                document.getElementById('map').append(temp);
                
            }

            

        }
        
    }
}








/*
function handleKey(e) {
    switch (e.keyCode) {
      case keys.left:
        position.y--;
        break;
      case keys.up:
        position.x--;
        break;
  
      case keys.right:
        position.y++;
        break;
  
      case keys.down:
        position.x++;
        break;
    }}*/

document.addEventListener('keyup', logKey)
function logKey(e)
{
    console.log(e.key);
    
};
drawMap(tileMap01);