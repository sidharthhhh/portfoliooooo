import React from 'react'
import BookCard from '../components/bookcard'
import { books } from '../data/data'
import Head from 'next/head'
import TransitionEffect from '@/components/TransitionEffect'

const Books = () => {
  return (
    <>
     <Head>
        <title>Books</title>
        <meta name="description" content="Here their are some of my favorite books" />
      </Head>
      <TransitionEffect />

    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Book Collection</h1>
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {books.map((book) => (
          <BookCard
            id={book.id}
            key={book.id}
            title={book.title}
            author={book.author}
            description={book.description}
            coverImage={book.image}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default Books