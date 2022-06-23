

class Game {
    constructor(){
        this.player = null; // will store an instance of the class Player
    }
    start(){
        this.player = new Player();
        this.attachEventListeners();
    }
    attachEventListeners(){
        document.addEventListener("keydown", (event) => {
            if(event.key === "ArrowLeft"){
                this.player.moveLeft();
            } else if(event.key === "ArrowRight"){
                this.player.moveRight();
            }
        });
    }
}


class Player {
    constructor(){
        this.positionX = 45;
        this.positionY = 0;
        this.createDomElement();
    }
    createDomElement(){
        // create dom element
        this.domElement = document.createElement('div');

        // set id and css 
        this.domElement.id = "player";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";

        // append to the dom
        const boardElm = document.getElementById("board"); //
        boardElm.appendChild(this.domElement);
    }
    moveLeft(){
        this.positionX--;
        this.domElement.style.left = this.positionX + "vw"
    }
    moveRight(){
        this.positionX++;
        console.log(`current horizontal position.... ${this.positionX}`)
        this.domElement.style.left = this.positionX + "vw"
    }
}





const game = new Game();
game.start();


