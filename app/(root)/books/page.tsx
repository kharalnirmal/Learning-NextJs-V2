import book from '@/app/api/db';
import React from 'react'

const page = async () => {
    const response = await fetch("http://localhost:3000/api/books", { cache: "no-store" });
    const data = await response.json();
    console.log(data);
    
    return (
        <div>
           
            {data.map((book: { id: number; title: string; author: string }) => (
            <div className='flex items-center justify-center space-x-5' key={book.id}>
                <h2>{book.title}</h2>
                <p>{book.author}</p>
            </div>
            ))}
        </div>
    )
}

export default page
    