import React from 'react'
import img from "../../photo.png"

const Avatar = () => {
    return (
        <div className="w-fit max-w-full flex items-center justify-center">
            <img 
                className="w-8 h-8 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-20 lg:h-20 p-1 rounded-full ring-1 ring-gray-300 dark:ring-gray-500 object-cover" 
                src={img} 
                alt="Bordered avatar" 
            />
        </div>
    )
}

export default Avatar
