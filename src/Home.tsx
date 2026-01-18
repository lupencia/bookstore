import React, { useEffect, useState} from 'react';
import Card, { type CardProps } from './components/Card';
import { Hero } from './components/Hero';
import type { BookList } from './types/Book';
import { fetchBooks, fetchByBookId } from './services/api';

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
   const [data, setData] = useState<BookList| null>();

   useEffect(()=> {
        fetchBooks();
        //setData(data)
   }, [])

   const htmlData = data.map((item: BookList)=> {
        return <li>{item.kind}</li>
   })
   console.log(htmlData)
    return (
        <>
        <Hero title='Page title' label='Find your book' text='search' placeholder='Find your book' onClick={handleCardButton}/>
        {/* Despues que ya tienes el tipo, puedes mapear los datos correctamente con las propiedades que tiene el tipo Book */}
        {/* //{htmlData} */}
         <section className='grid grid-cols-4 gap-4'>
            {/* Aqui ya puedes modificar el tipo de CardProps para que acepte las propriedades venientes de Book */}
            {cards.map((elem: CardProps) =>(
                <Card key={elem.title} title={elem.title} description={elem.description} onClick={elem.onClick}/>
            ))}
         </section>
        </>
       
    )
}

export type HomeProps = {
    
}