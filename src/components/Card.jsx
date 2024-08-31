import { capitalize } from '../utils/capitalize';
import './Card.css';

function Card({ name, src }) {

    return (
        <div className="card">
            <img src={src} alt={name} />
            <p>{capitalize(name)}</p>
        </div>
    )
}

export default Card;