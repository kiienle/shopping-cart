import React from 'react'

export default function DetailsThumb({images, setIndex}) {
    return (
        <div className='thumb'>
            {
                images.map((image, index) =>
                    <img src={img} alt='' key={index} />
                )
            }
        </div>
    )
}
