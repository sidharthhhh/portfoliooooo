import { useRouter } from 'next/router'
import { books } from '../../data/data'
import Head from 'next/head'
import TransitionEffect from '@/components/TransitionEffect'

export default function BookDetail() {
  const router = useRouter()
  const { id } = router.query
  const book = books.find(b => b.id === parseInt(id))

  if (!book) return <div>Loading...</div>

  return (
    <>
    <Head>
        <title>BookDetail</title>
        <meta name="description" content="ditail Information about the book" />


      </Head>
      <TransitionEffect />
    <div className="container mx-auto px-4 py-8">
      <button 
        onClick={() => router.back()} 
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Back to Books
      </button>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden  dark:bg-dark dark:text-light">
        <div className="flex sm:flex-col w-full">
          <div className="w-1/2 p-6 sm:w-full border-r sm:border-t lg:border-t-0">
            <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
            <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: book.content.slice(0, book.content.length / 2) }} />
          </div>
          <div className="w-1/2 p-6 sm:w-full border-r sm:border-t lg:border-t-0">
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: book.content.slice(book.content.length / 2) }} />
          </div>
        </div>
      </div>
      </div>
      </>
  )
}