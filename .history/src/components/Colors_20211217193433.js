import React from 'react'

export default function Color({colors}) {
    return (
        <div className='colors'>
            {
                colors.map((color, index) =>
                    <button key={index} style={{backgroundColor: color}}></button>
                )
            }
        </div>
    )
}
