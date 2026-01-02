import React from 'react';

export default function Card({
    title,
    description,
    onClick,

}: CardProps){
    return (   
        <div className="min-w-3xs rounded-lg bg-blue-200
 p-4 border-1 border-cyan-900 border-solid">
         <h3>{title}</h3>
         <p>{description}</p>
         <button 
            onClick={onClick}
            className='bg-blue-500 p-2 border-cyan-900 rounded-lg '>
            Add
        </button>
        </div>     
    )
}

export type CardProps = {
    title?: string;
    description?: string;
    onClick?: ()=> void;
}