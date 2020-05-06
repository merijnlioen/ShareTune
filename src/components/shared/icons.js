import React from 'react'

export const Facebook = () => (
    <svg className="icon" x="0px" y="0px" viewBox="0 0 130 130" xmlSpace="preserve">
        <rect className="st0" width="130" height="130"/>
        <g>
            <path className="st1" d="M79.8,25.4h19.7V1H79.8C63.5,1,50.2,15.4,50.2,33v12.3H30.5v24.5h19.7V129h24.6V69.8h24.6V45.3H74.8V32.8
                C74.8,28.5,77.5,25.4,79.8,25.4z"/>
        </g>
    </svg>
)

export const Instagram = () => (
    <svg className="icon" x="0px" y="0px" viewBox="0 0 130 130" xmlSpace="preserve">
        <rect className="st0" width="130" height="130"/>
        <g>
            <path className="st1" d="M112.6,1H17.4C8.4,1,1,8.4,1,17.4v95.2c0,9,7.4,16.4,16.4,16.4h95.1c9,0,16.4-7.4,16.4-16.4V17.4
                C129,8.4,121.6,1,112.6,1z M92.4,21.1c0-2.7,2.2-4.9,4.9-4.9h11.6c2.7,0,4.9,2.2,4.9,4.9v11.6c0,2.7-2.2,4.9-4.9,4.9H97.3
                c-2.7,0-4.9-2.2-4.9-4.9L92.4,21.1L92.4,21.1z M65,37.6c15.1,0,27.4,12.3,27.4,27.4c0,15.1-12.3,27.4-27.4,27.4S37.6,80.1,37.6,65
                C37.6,49.8,49.9,37.6,65,37.6z M116.9,111.7c0,2.8-2.3,5.1-5.1,5.1H18.3c-2.8,0-5.1-2.3-5.1-5.1V55.8h13.2c-0.7,2.9-1.1,6-1.1,9.1
                c0,21.9,17.8,39.7,39.7,39.7c21.9,0,39.7-17.8,39.7-39.7c0-3.1-0.4-6.2-1.1-9.1h13.3V111.7z"/>
        </g>
    </svg>    
)

export const LinkedIn = () => (
    <svg className="icon" x="0px" y="0px" viewBox="0 0 130 130" xmlSpace="preserve">
        <rect className="st0" width="130" height="130"/>
        <g>
            <path className="st1" d="M10.4,129h25V41.6h-25V129z M105.7,46.6c-9.3-5.2-23-5.7-32.9-1.1v-3.8h-25V129h25V73.1l10.3-5
                c2.5-1.2,8.1-1.1,10.4,0.2c1.8,1,4.3,5.1,4.3,7.6V129h25V75.9C122.8,64.4,115.6,52.1,105.7,46.6z M22.9,1C14.2,1,7.2,8,7.2,16.6
                c0,8.6,7,15.6,15.6,15.6s15.6-7,15.6-15.6C38.5,8,31.5,1,22.9,1z"/>
        </g>
    </svg>
)

export const Close = ({ ...props }) => (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 27.38 27.38" xmlSpace="preserve" {...props}>
        <g>
            <line stroke="#000" x1="4.81" y1="4.72" x2="22.36" y2="22.54"/>
            <line stroke="#000" x1="22.36" y1="4.72" x2="4.81" y2="22.54"/>
        </g>
    </svg>
)

export const Open = ({ ...props }) => (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 27.38 27.38" xmlSpace="preserve" {...props}>
        <line stroke="#000" x1="4.58" y1="9.34" x2="22.43" y2="9.34"/>
        <line stroke="#000" x1="4.58" y1="18.34" x2="22.43" y2="18.34"/>
    </svg>
)