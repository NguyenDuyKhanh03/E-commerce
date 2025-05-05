import React from 'react'
import RenderStars from '../utils/RenderStars'

const ReviewItem = ({ review }) => {
    return (
        <div className='p-6 md:py-7 md:px-8 border-1 border-[#0000001A] rounded-[20px] flex flex-col'>
            <div className='flex flex-row'>
                <RenderStars rating={review.rating} />
            </div>
            <div className='md:text-[20px] font-[700px] md:mt-[19.5px] mt-3'>{review.clientName}</div>
            <div className='md:text-[16px] font-[400px] text-[#00000099] mt-[11.5px] md:mt-3'>{review.comment}</div>
            <div className='md:text-[16px] font-[400px] text-[#00000099] mt-4 md:mt-6'>{review.time}</div>
        </div>
    )
}

export default ReviewItem