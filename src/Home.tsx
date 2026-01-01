import React, { type ReactNode } from 'react';
import Card, { type CardProps } from './components/Card';

export function Home({
 cards = [
    {
                title: 'nombres',
                description: 'Texto largo de la 1ª opción para comprobar la consistencia del componente',
                //onClick: {()=> void}
            },
              {
                title: 'nombres 2',
                description: 'Texto largo de la 1ª opción para comprobar la consistencia del componente',
                //onClick: {()=> void}
            },
              {
                title: 'nombres 3',
                description: 'Texto largo de la 1ª opción para comprobar la consistencia del componente',
                //onClick: {()=> void}
            },
 ],
 title,
 onClick,
 onClickCard
}: HomeProps){
    return (
        <>
        <section className='flex-col items-center justify-center'>
            <h1>{title}</h1>
            <label className='block' htmlFor="findread">Find Your Next Great Read</label>
            <input className='min-w-3xs rounded-lg
 p-2 border-1 border-cyan-900 border-solid' type="text" name='findread' id='findread' placeholder='Search by title, author, or ISBN...'/>
            <button onClick={onClick} className='bg-blue-500 p-2 border-cyan-900'>Search</button>
        </section>
         
         <section className='grid grid-cols-4 gap-4'>
            {cards.map((elem) =>(
                <Card title={elem.title} description={elem.description} onClick={onClickCard}/>
            ))}
         </section>
        </>
       
    )
}

export type HomeProps = CardProps & {
    cards?: CardProps[];
    title?: string;
    onClick?: ()=> void;
    onClickCard? :  ()=> void;
}