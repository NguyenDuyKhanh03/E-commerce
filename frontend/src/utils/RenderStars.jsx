import StarIcon from "../assets/icons/staricon";
import HalfStarIcon from "../assets/icons/halfStar";

export default function RenderStars({rating}) {
        const stars = []
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5 ? 1 : 0;
        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <StarIcon
                    key={`full-${i}`}
                    className={`w-[15px] h-[18px] md:w-[18px] md:h-[18px]`}
                />
            )
        }

        if (halfStar) {
            stars.push(<HalfStarIcon key='half' />)
        }
        return <>{stars}</>
    }