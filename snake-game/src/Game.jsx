import React from "react";

export default function Game (props) {

    const rows = 12, cols = 18;

    let snakeIntialPosition = [ {x: rows / 2, y: cols / 2,}, {x: rows / 2, y: cols / 2 + 1,}];

    const [score, setScore] = React.useState(0);
    const [food, setFood] = React.useState({ x: 5, y: 5 });
    const [snake, setSnake] = React.useState(snakeIntialPosition);
    const [direction, setDirection] = React.useState("RIGHT");
   
    const renderPlayzone = () => {
        let cellArray = [];
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                let classes = "cell";
                let isFood = (food.x === r && food.y === c);
                let isSnakeHead = (snake[0].x === r && snake[0].y === c);
                let isSnake = snake.some((ele) => ele.x === r && ele.y === c);

                if (isFood) {
                    classes = `${classes} food`;
                }
              
                if (isSnake) {
                    classes = `${classes} snake`;
                }
              
                if (isSnakeHead) {
                    classes = `${classes} snake-head`;
                }
              
                let cell = <div key={`${r}-${c}`} className={classes}></div>;
              
                cellArray.push(cell);
            }   
        }
        return cellArray;
    }

    function renderFood() {
        let randomX = Math.floor(Math.random() * rows);
        let randomY = Math.floor(Math.random() * cols);
    
        setFood({
            x: randomX,
            y: randomY,
        });
    }
    
    function gameOver() {
        setSnake(snakeIntialPosition);
        setScore(0);
        props.endGame();
    }
    
    function updateGame() {
        if ( snake[0].x < 0 || snake[0].x > rows || snake[0].y < 0 || snake[0].y > cols) {
            gameOver();
            return;
        }
        const isBit = snake.slice(1).some((ele) => ele.x === snake[0].x && ele.y === snake[0].y);
        
        if (isBit) {
            gameOver();
            return;
        }
    
        let newSnake = [...snake];

        if (direction === "UP") {
          newSnake.unshift({ x: newSnake[0].x - 1, y: newSnake[0].y });
        }
        if (direction === "DOWN") {
          newSnake.unshift({ x: newSnake[0].x + 1, y: newSnake[0].y });
        }
        if (direction === "LEFT") {
          newSnake.unshift({ x: newSnake[0].x, y: newSnake[0].y - 1 });
        }
        if (direction === "RIGHT") {
          newSnake.unshift({ x: newSnake[0].x, y: newSnake[0].y + 1 });
        }
    
        // checking if food was eaten on not
        if (newSnake[0].x === food.x && newSnake[0].y === food.y) {
            setScore((sco) => sco + 1);
            renderFood();
        } else {
            newSnake.pop();
        }
    
        setSnake(newSnake);
    }
    
    function updateDirection(e) {
        let key = e.code;
        switch (key) {
            case "ArrowUp":
                if (direction !== "DOWN") setDirection("UP");
                break;
            case "ArrowDown":
                if (direction !== "UP") setDirection("DOWN");
                break;
            case "ArrowLeft":
                if (direction !== "RIGHT") setDirection("LEFT");
                break;
            case "ArrowRight":
                if (direction !== "LEFT") setDirection("RIGHT");
                break;
        }
    }

    React.useEffect(() => {
        let moveSnake = setInterval(updateGame, 150);
        return () => clearInterval(moveSnake);
    });
    
    React.useEffect(() => {
        document.addEventListener("keydown", updateDirection);
        return () => document.removeEventListener("keydown", updateDirection);
    });

    return (
        <div className='playzone'>
            {renderPlayzone()}
        </div>
    )
}