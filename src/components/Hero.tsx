import React from "react";

export function Hero({title, label, text, placeholder, onClick}: HeroProps){
    return(
         <section className='flex-col items-center justify-center'>
                    <h1>{title}</h1>
                    <label className='block' htmlFor="findread">{label}</label>
                    <input className='min-w-3xs rounded-lg
         p-2 border-1 border-cyan-900 border-solid' type="text" name='findread' id='findread' placeholder={placeholder}/>
                    <button onClick={onClick} className='bg-blue-500 p-2 border-cyan-900'>{text}</button>
                </section>
                 
    )
}

export type HeroProps = {
    title?: string;
    label?: string;
    text?: string;
    placeholder?: string;
    onClick?: ()=> void;
}