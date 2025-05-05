import React from 'react'
import StarIcon from '../assets/icons/staricon';
import HalfStarIcon from '../assets/icons/halfStar';
import RenderStars from '../utils/RenderStars';

const Product = ({ product, className }) => {

    // const renderStars = (rating) => {
    //     const stars = []
    //     const fullStars = Math.floor(rating);
    //     const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    //     for (let i = 0; i < fullStars; i++) {
    //         stars.push(
    //             <StarIcon
    //                 key={`full-${i}`}
    //                 className={`w-[15px] h-[18px] md:w-[18px] md:h-[18px]`}
    //             />
    //         )
    //     }

    //     if (halfStar) {
    //         stars.push(<HalfStarIcon key='half' />)
    //     }
    //     return stars
    // }

    return (
        <div className={` ${className}`}>
            <div className='w-[198px] h-[200px] md:w-[295px] md:h-[295px] bg-[#F0EEED] rounded-[20px] items-center justify-center flex'>
                <img
                    src={product.image}
                    alt={product.name}
                    className={`object-cover rounded-[20px]`}
                />
            </div>
            <div
                className={`text-[16px] md:text-[20px] font-[700] text-[#000] mt-4`}
            >
                {product.name}
            </div>
            <div className='flex flex-row gap-3'>
                {<RenderStars rating={product.rating} />}
                <div className='flex flex-row items-center'>
                    <div className='text-[12px] md:text-[14px] font-[400px]'>{product.rating}</div>
                    <div className='text-[12px] md:text-[14px] font-[400px] text-[#666666]'>/5</div>
                </div>
            </div>
            <div className='flex flex-row gap-2.5 mt-2'>
                <div className='text-[20px] md:text-[24px] font-[700px]'>{product.price}</div>
            </div>
        </div>
    )
}

export default Product