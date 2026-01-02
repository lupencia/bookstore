import React, { type ReactNode } from 'react';
import Card, { type CardProps } from './components/Card';
import { Hero } from './components/Hero';

const handleCardButton = () => console.log('pepe');
const hable1Button = () => alert('hola')

const cards:  CardProps[] = [
    {
        title: 'nombres',
        description: 'Texto largo de la 1ª opción para comprobar la consistencia del componente',
        onClick: hable1Button,

    },
        {
        title: 'nombres 2',
        description: 'Texto largo de la 1ª opción para comprobar la consistencia del componente',
        onClick: handleCardButton,

    },
        {
        title: 'nombres 3',
        description: 'Texto largo de la 1ª opción para comprobar la consistencia del componente',
       onClick: handleCardButton,

    },
]
export function Home({

}: HomeProps){
    const handleClick = ()=> console.log('button check')
    
    return (
        <>
        <Hero title='Page title' label='Find your book' text='search' placeholder='Find your book' onClick={handleClick}/>
         <section className='grid grid-cols-4 gap-4'>
            {cards.map((elem: CardProps) =>(
                <Card key={elem.title} title={elem.title} description={elem.description} onClick={elem.onClick}/>
            ))}
         </section>
        </>
       
    )
}

export type HomeProps = {
    
}