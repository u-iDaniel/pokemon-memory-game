import './Score.css';

function Score({ score, lives }) {
    
    return (
        <div className="score">
            <h3>High Score: x</h3>
            <h3>Lives: {lives} | Score: {score}</h3>
        </div>
    )
}

export default Score;