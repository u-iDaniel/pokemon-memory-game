import '../styles/Score.css';

function Score({ score, lives, highScore }) {

    return (
        <div className="score">
            <h3>High Score: {highScore}</h3>
            <h3>Lives: {lives} | Score: {score}</h3>
        </div>
    )
}

export default Score;