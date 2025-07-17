import React from 'react'
import img from "../../Photo.png"

const Avatar = () => {
    return (
        <div>

            <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={img} alt="Bordered avatar" />

        </div>
    )
}

export default Avatar
