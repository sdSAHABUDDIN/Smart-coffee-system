import React from 'react'
import { thumbnail } from '../constants'
const Thumbnails = () => {
  return (
    <div className="flex lg:flex-col gap-3">
            {thumbnail.map((item) => (
              <img
                key={item.id}
                src={item.img}
                alt={`Thumbnail ${item.id}`}
                onClick={() => setMainImage(item.img)}
                className="w-16 h-16 object-cover rounded-lg border hover:scale-105 transition"
              />
            ))}
          </div>
  )
}

export default Thumbnails