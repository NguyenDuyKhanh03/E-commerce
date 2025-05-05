import React, { useState } from 'react'
import LeftIcon from '../assets/icons/left'
import { aothun } from '../assets/images'
import StarIcon from '../assets/icons/staricon'
import HalfStarIcon from '../assets/icons/halfStar'
import { div } from 'framer-motion/client'
import { motion } from 'framer-motion'
import FilterIcon from '../assets/icons/filter'
import DropdownIcon from '../assets/icons/dropdown'
import ReviewItem from '../components/ReviewItem'
import DescreateIcon from '../assets/icons/descreate'
import InscreateIcon from '../assets/icons/inscreate'

const tabs = ['Product Details', 'Rating & Reviews', 'FAQs'];
const reviews = [
    {
        id: 1,
        clientName: 'John Doe',
        rating: 4.5,
        comment: 'Great product! I love it.',
        time: '2 days ago',
    },
    {
        id: 2,
        clientName: 'Jane Smith',
        rating: 3.5,
        comment: 'Good quality, but a bit expensive.',
        time: '1 week ago',
    },
    {
        id: 3,
        clientName: 'Alice Johnson',
        rating: 5,
        comment: 'Excellent! Highly recommend.',
        time: '1 month ago',
    },
    {
        id: 4,
        clientName: 'Bob Brown',
        rating: 2,
        comment: 'Not what I expected. Disappointed.',
        time: '2 months ago',
    },
    {
        id: 5,
        clientName: 'Charlie Davis',
        rating: 4,
        comment: 'Very good, but could be better.',
        time: '3 months ago',
    },
    {
        id: 6,
        clientName: 'Diana Evans',
        rating: 3,
        comment: 'Average product. Nothing special.',
        time: '4 months ago',
    },
    {
        id: 7,
        clientName: 'Ethan Foster',
        rating: 4.5,
        comment: 'Really nice! I am satisfied.',
        time: '5 months ago',
    },
]

const product1 = {
    "productName": "Áo Thun Nam Nữ Unisex Relax Fit",
    "description": "Áo thun unisex relax fit với chất vải em bé cao cấp, mềm mịn và mát lạnh. Thiết kế đơn giản nhưng tinh tế, phù hợp với cả nam và nữ trong mọi hoàn cảnh: đi chơi, ở nhà, tập gym hay dạo phố.",
    "highlights": [
        "Relax Fit Tôn Dáng - Dáng áo rộng vừa phải, thoải mái và che khuyết điểm",
        "Vải Em Bé Cao Cấp - Mềm mịn, thấm hút tốt, mát lạnh mùa hè",
        "Thiết Kế Basic - Dễ phối với nhiều phong cách thời trang",
        "Phù Hợp Mọi Hoạt Động - Mặc ở nhà, đi chơi, tập thể thao hoặc mặc nhóm",
        "Unisex - Cả nam và nữ đều mặc đẹp, phù hợp nhiều vóc dáng"
    ],
    "careInstructions": [
        "Giặt máy hoặc giặt tay, không nhăn, không xù vải",
        "Phối cùng quần jeans, short hoặc jogger",
        "Mặc đơn giản hoặc layer với áo sơ mi khoác ngoài"
    ],
    "store": "Fish & Fash",
    "callToAction": "Thêm vào tủ đồ của bạn một chiếc áo “mặc là mê”! Mua ngay tại Kane Gym Wear và nhận hàng nhanh chóng"
}


const ProductDetail = ({ product }) => {

    const [activeTab, setActiveTab] = useState(tabs[0]);

    const renderStars = (rating) => {
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
        return stars
    }
    return (
        <div className='md:px-[100px] px-4'>
            <div className='flex flex-row gap-1.5 md:gap-3 items-center py-1'>
                <div className='flex flex-row gap-1 items-center'>
                    <div className='text-[14px] md:text-[16px] font-[400px] text-[#00000099]'>Home</div>
                    <LeftIcon
                        width={14}
                        height={14}
                    />
                </div>
                <div className='flex flex-row gap-1 items-center'>
                    <div className='text-[14px] md:text-[16px] font-[400px] text-[#00000099]'>Shop</div>
                    <LeftIcon
                        width={14}
                        height={14}
                    />
                </div>
                <div className='flex flex-row gap-1 items-center'>
                    <div className='text-[14px] md:text-[16px] font-[400px] text-[#00000099]'>Men</div>
                    <LeftIcon
                        width={14}
                        height={14}
                    />
                </div>
                <div className='flex flex-row gap-1 items-center'>
                    <div className='text-[14px] md:text-[16px] font-[400px] text-[#00000099]'>T-Shirt</div>
                </div>

            </div>
            <div className='flex flex-col md:flex-row md:gap-5 mt-5 md:mt-9'>
                <div className='flex md:flex-1 flex-col-reverse md:flex-row gap-3 md:gap-3.5'>
                    <div className='flex flex-row md:flex-col gap-3 md:gap-3.5'>
                        <div className='w-auto h-[106px] md:w-full md:h-[167px] justify-center items-center bg-[#F0EEED] rounded-[20px]'>
                            <img
                                src={aothun}
                                alt=""
                                className='object-contain max-w-full max-h-full'
                            />
                        </div>
                        <div className='w-auto h-[106px] md:w-full md:h-[167px] justify-center items-center bg-[#F0EEED] rounded-[20px]'>
                            <img
                                src={aothun}
                                alt=""
                                className='object-contain max-w-full max-h-full'
                            />
                        </div>
                        <div className='w-auto h-[106px] md:w-full md:h-[167px] justify-center items-center bg-[#F0EEED] rounded-[20px]'>
                            <img
                                src={aothun}
                                alt=""
                                className=' object-contain max-w-full max-h-full'
                            />
                        </div>
                    </div>
                    <div className='bg-[#F0EEED] w-full h-full md:w-[444px] md:h-[530px] rounded-[20px] items-center flex justify-center'>
                        <img
                            src={aothun}
                            alt=""
                            className='object-contain max-w-full max-h-full'
                        />
                    </div>
                </div>
                <div className='flex md:flex-1 flex-col mt-5 md:mt-0'>
                    <div className='text-[24px] md:text-[40px] font-[700px] flex-wrap'>One Life Graphic T-shirt</div>
                    <div className='flex flex-row gap-4 items-center'>
                        {renderStars(3.5)}
                        <div className='flex flex-row items-center'>
                            <div className='text-[14px] md:text-[16px] font-[400px]'>{3.5}</div>
                            <div className='text-[14px] md:text-[16px] font-[400px] text-[#666666]'>/5</div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2.5 mt-2'>
                        <div className='text-[20px] md:text-[24px] font-[700px]'>4$</div>
                    </div>
                    <div className='text-[14px] md:text-[16px] font-[400px] md:mt-5 text-[#00000099]'>
                        This graphic t-shirt which is perfect for any<br />
                        occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
                    </div>
                    <div className='mt-12'>
                        <div className='text-[16px] md:text[16px] font-[400px] text-[#00000099] '>Select Colors</div>
                        <div className='flex flex-row gap-4 mt-4'>
                            <div className='w-[39px] h-[39px] bg-[#31344F] rounded-full' />
                            <div className='w-[39px] h-[39px] bg-blue-50 rounded-full' />
                            <div className='w-[39px] h-[39px] bg-amber-100 rounded-full' />
                        </div>
                    </div>
                    <div className='mt-12'>
                        <div className='text-[16px] md:text[16px] font-[400px] text-[#00000099] '>Choose Size</div>
                        <div className='flex flex-row gap-3 flex-wrap mt-4'>
                            <button className='btn btn-outline rounded-[62px] bg-[#F0F0F0] border-0 text-[14px] md:text-[16px] font-[400px] w-[74px] h-[39px] py-2.5 px-5 md:py-3 md:px-6 md:w-[104px] md:h-[46px] '>S</button>
                            <button className='btn btn-outline rounded-[62px] bg-[#F0F0F0] text-[14px] md:text-[16px] font-[400px] border-0 w-[74px] h-[39px] py-2.5 px-5 md:py-3 md:px-6  md:w-[104px] md:h-[46px] '>M</button>
                            <button className='btn btn-outline rounded-[62px] bg-[#F0F0F0] text-[14px] md:text-[16px] font-[400px] border-0 w-[74px] h-[39px] py-2.5 px-5 md:py-3 md:px-6  md:w-[104px] md:h-[46px] '>L</button>
                            <button className='btn btn-outline rounded-[62px] bg-[#F0F0F0] text-[14px] md:text-[16px] font-[400px] border-0 w-[74px] h-[39px] py-2.5 px-5 md:py-3 md:px-6  md:w-[104px] md:h-[46px] '>L</button>
                            <button className='btn btn-outline rounded-[62px] bg-[#F0F0F0] text-[14px] md:text-[16px] font-[400px] border-0 w-[74px] h-[39px] py-2.5 px-5 md:py-3 md:px-6  md:w-[104px] md:h-[46px] '>XL</button>
                        </div>
                    </div>
                    <div className='flex flex-row gap-3 md:gap-5 mt-7'>
                        <div className='flex flex-row h-[44px] md:h-[52px] py-3 px-4 md:py-4 md:px-[20px] bg-[#F0F0F0] rounded-[62px] items-center gap-3'>
                            <button className='btn btn-outline border-0 rounded-full'>{<DescreateIcon className='w-4 h-4 md:w-5 md:h-5' />}</button>
                            <div className='text-[14px] md:text-[16px] font-[500px]'>1</div>
                            <button className='btn btn-outline border-0 rounded-full'>{<InscreateIcon className='w-4 h-4 md:w-5 md:h-5'/>}</button>
                        </div>
                        <button className='flex-1 btn btn-neutral  h-[44px]  md:h-[52px] md:py-4 md:px-[54px] rounded-[62px] text-white text-[16px] font-[500px]'>Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className='mt-5 md:mt-20 flex flex-col gap-8'>
                <div className='flex flex-row justify-between items-center overflow-x-auto md:overflow-visible'>
                    {tabs.map(tab => (
                        <button className='relative md:w-[414px] btn btn-active bg-transparent border-0'
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                        >
                            <div className={`text-[16px] md:text-[20px] font-[500px] ${tab === activeTab ? 'text-[#000000]' : 'text-[#00000099]'}`}>
                                {tab}
                            </div>
                            <div>
                                {tab === activeTab &&
                                    (
                                        <motion.div
                                            layoutId="underline"
                                            className='absolute left-0 right-0 -bottom-0.5 h-[2px] bg-black'
                                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                        />
                                    )}
                            </div>
                        </button>
                    ))}
                </div>
                <div>
                    {activeTab === 'Product Details' && (
                        <div className='flex flex-col gap-5'>
                            <div className='font-[700px] md:text-[20px] text-[16px]'>One Life Graphic T-shirt</div>
                            <div className='font-[400px] md:text-[20px] text-[16px] text-[#00000099]'>{product1.description}</div>
                            <div className='font-[400px] md:text-[24px] text-[20px]'>Vì Sao Bạn Nên Chọn Chiếc Áo Này?</div>
                            <ul>
                                {product1.highlights.map((highlight, index) => (
                                    <li key={index} className='font-[400px] md:text-[18px] text-[14px] list-disc ml-6 '>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                            <div className='font-[400px] md:text-[24px] text-[20px]'>Cách Sử Dụng</div>
                            <ul>
                                {product1.careInstructions.map((highlight, index) => (
                                    <li key={index} className='font-[400px] md:text-[18px] text-[14px] list-disc ml-6 '>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                            <div className='font-[400px] md:text-[24px] text-[20px]'>Hoàn Hảo Cho Mùa Hè Năng Động</div>
                            <div className='font-[400px] md:text-[18px] text-[14px]'>{product1.callToAction}</div>
                            <div className='h-14' />

                        </div>
                    )}
                    {activeTab === 'Rating & Reviews' && (
                        <div className=''>
                            <div className='flex flex-row justify-between items-center'>
                                <div className='flex flex-row gap-2 items-center h-8'>
                                    <div className='text-[20px] md:text-2xl font-[700px]'>All Reviews</div>
                                    <div className='text-[14px] md:text-[16px] font-[400px] text-[#00000099]'>(2)</div>
                                </div>
                                <div className='flex flex-row gap-2 md:gap-5'>
                                    <button className='btn btn-square rounded-full'>{<FilterIcon />}</button>
                                    <button className='btn bg-[#F0F0F0] rounded-[62px] hidden md:flex'>
                                        Latest
                                        {<DropdownIcon />}
                                    </button>
                                    <button className='btn btn-ghost bg-[#000] rounded-[62px] text-white text-[16px] font-[500px]'>Write a Review</button>
                                </div>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mt-5 md:mt-6'>
                                {reviews.map((review) => (
                                    <ReviewItem
                                        key={review.id}
                                        review={review}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                    {activeTab === 'FAQs' && (
                        <div className='text-[14px] md:text-[16px] font-[400px] text-[#00000099] mt-5'>
                            No FAQs yet.
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductDetail