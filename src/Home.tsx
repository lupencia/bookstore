import React, { useEffect, useState, type ReactNode } from 'react';
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
    //const {data, loading} = searchBooks('https://www.googleapis.com/books/v1/volumes?q={search}');
    const url = 'https://www.googleapis.com/books/v1/volumes?q=react';
    /* Para tipar el estado data se puede usar generics en useState<>
     ejemplo: useState<Product[]>([]) esto indica que data es un array de productos y se va inicializar como un array vacío
     Generics es una forma de definir tipos en TypeScript que son dinámicos y se pueden reutilizar en diferentes contextos.
    Puedes entenderlo más lo que es en la documentación oficial: https://www.typescriptlang.org/docs/handbook/2/generics.html */
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleClick = ()=> {console.log('button check')}

    //FORMA BÁSICA DE HACER FETCH DENTRO DE UN useEffect
    useEffect(()=> {
        //No es necesario setLoading(true) aquí porque ya se inicializa en true
        setLoading(true);
        fetch(url)
        .then(response => (response.json()))
        //para aceder a los libros es data.items que es un array de Book
        .then(data => setData(data))
        //método de fetch que se usa cuando se ha terminado de hacer todas las llamadas
        .finally(()=> setLoading(false))
    }, [])

    //PADRÓN DE DISEÑO CAPA DE SERVICIO API
    //Una forma alternativa de obtener los datos sería moviendo la lógica de fetch a una función asíncrona (por ejemplo en el archivo api.ts) y llamándola dentro de useEffect
    //Así como Promise, async/await es otra forma de manejar operaciones asíncronas en JavaScript.
    // useEffect(() => {
    // const loadData = async () => {
    //   try {
    //     const data = await fetchProducts();
    //     setProducts(data);
    //   } catch (err) {
    //     setError(err.message);
    //   }
    // };

    // loadData();
    // }, []);

    //CUSTOM HOOK PARA FETCH
    //Otra forma sería creando un custom hook (por ejemplo useSearchProducts que está en src/hooks/useSearchProducts.ts) que encapsule la lógica de fetch y devuelva los datos y el estado de carga.
    // Uno estado para cuando el usuario escribe en el input de búsqueda
    // const [searchQuery, setSearchQuery] = useState('');
    // const { data, loading } = useSearchProducts(searchQuery);
    // const handleSearch = (value: string) => {
    //     setSearchQuery(value);
    // };


    return (
        <>
        <Hero title='Page title' label='Find your book' text='search' placeholder='Find your book' onClick={handleClick}/>
        {loading && <li>Loading...</li>}
        {/* Despues que ya tienes el tipo, puedes mapear los datos correctamente con las propiedades que tiene el tipo Book */}
        {data.map(book )}
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