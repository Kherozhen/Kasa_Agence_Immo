import imgStar from '../../Images/Star.png';
import imgStarEmpty from '../../Images/StarEmpty.png';


function Rating ({ rating }) {

    const ratingValue = parseFloat(rating);
   
    return (
        <div className="ratingStars">
            {[...Array(5)].map((_, index) => (
                <img 
                    key={index}
                    src={index < ratingValue ? imgStar : imgStarEmpty}
                    alt="Star"
                />
            ))}
        </div>
    )
}

export default Rating;