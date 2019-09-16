class Player{
    constructor(name, type, x, y, size=30){
        this.name = name;
        this.type = type;
        this.size = size;
        this.arrows = [];
        this.color = type == "Police" ? "red" : "black";
        this.x = 0;
        this.y = 0;
    }

}

class Game{
    constructor(canvas,width, height){
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        canvas.width = width;
        canvas.height = height;
        this.ctx = canvas.getContext('2d');
        this.players = createPlayers(2);
    }
    createPlayers(num){
        let players = [];
        for(let i=0;i<num;i++){
            let type = (i<num/2)?'Police':'Thief';
            let name = type+' '+ (i%num/2+1);
            let x = 0;
            let y = 0;
            let player = new Player(name,type,x,y);
        }   
    }
}

function initGame() {
    // alert("Onload");
    let canvas = document.getElementById('game');
    //jquery
    // let canvas = $("#game")[0];
    let game = new Game(canvas,400,300);
    console.log(canvas);
}
// document.onload = function(){
    initGame();
// }