socket.on("newPlayer",id=>{
    console.log(id)

        const scoreDisplay = document.createElement('h3')
        scoreDisplay.setAttribute('id','score');
        let score = 0
        const grid = document.createElement('div');
        grid.setAttribute('class','grid');
        const layout = [
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
            1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
            1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
            1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
            1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
            1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
            1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
            1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
            1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
            1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
            4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
            1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
            1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
            1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
            1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
            1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
            1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
            1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
            1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
            1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
            1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
            1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
            1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
        ]
        // 0 - pac-dots
        // 1 - wall
        // 2 - ghost-lair
        // 3 - power-pellet
        // 4 - empty

        const squares = []

        //create your board
        function createBoard() {
            for (let i = 0; i < layout.length; i++) {
                const square = document.createElement('div')
                grid.appendChild(square)
                squares.push(square)

                //add layout to the board
                if(layout[i] === 0) {
                    squares[i].classList.add('pac-dot')
                } else if (layout[i] === 1) {
                    squares[i].classList.add('wall')
                } else if (layout[i] === 2) {
                    squares[i].classList.add('ghost-lair')
                } else if (layout[i] === 3) {
                    squares[i].classList.add('power-pellet')
                }
            }
            const player_grid = document.querySelector(".player_grid");
            const individual_player = document.createElement('div');
            individual_player.setAttribute('class','individual_player');
            individual_player.append(grid)
            individual_player.append(scoreDisplay);
            player_grid.prepend(individual_player);


        }createBoard()
        /**@ALTHOUGH_THIS_FUNCTION_WILL_ONLY_RUN_ONE_TIMES_BECAUSE_IT_WILL_ADD_EVENTS_JAVASCRIPT_WILL_REMEMEBER_THAT_EVENTS_WILL_RUN_EVERYTIME**/
        updateGhost(squares)
        updatePacman(squares,scoreDisplay)


})


//update ghost location

//we do this so that we are only pushing the previous ghost block element current location
let prevGhostIndexOutside = [];
function updateGhost(elementBlockArray){
    //we do this so that we are only pushing the previous ghost block element current location
    const ghostEl = elementBlockArray;
    // get ghost location every move
    socket.on('moveGhost',ghostData=>{
        //draw my ghosts onto the grid

        //if the outside array have value meaning we can delete the previous element block of ghost
        if (prevGhostIndexOutside.length !== 0){
            prevGhostIndexOutside.forEach(currentGhost =>{
                currentGhost.classList.remove('ghost')
                currentGhost.classList.remove('blinky')
                currentGhost.classList.remove('pinky')
                currentGhost.classList.remove('inky')
                currentGhost.classList.remove('clyde')
            })
        }

        const ghostArrPrev = []
        ghostData.forEach(ghost => {
            ghostEl[ghost.currentIndex].classList.add(ghost.name);
            ghostEl[ghost.currentIndex].classList.add('ghost');
            ghostArrPrev.push(ghostEl[ghost.currentIndex]);
        })
        prevGhostIndexOutside = ghostArrPrev;

        //remove ghost to update the next frame


    });
}

let pacmanPrevLocation = null;
function updatePacman(elementBlockArray,scoreDisplay){
    const localBlock = elementBlockArray;

    socket.on("updatePacman",data=>{
        console.log(localBlock[data.index].classList)
        //if pacman already exist on the grid I.E not null, then remove it and update the new location
        if (pacmanPrevLocation !== null){
            //REMOVE EVERYTHING WHERE PACMAN IS
            pacmanPrevLocation.className = "";

            //remove everything where pacman located at
        }

        //REMOVE EVERYTHING WHERE PACMAN IS, Then update it.. We are doing this to fix those default css design to it by removing all class first
        //then applying the class pac-man after, therefore the only remaining class will be the pac-man
        localBlock[data.index].className = "";
        localBlock[data.index].classList.add('pac-man')

        scoreDisplay.innerHTML = `Score: <span>${data.score}</span>`
        pacmanPrevLocation = elementBlockArray[data.index];


    });
}


