import { useRouter } from 'next/router'

export default function BookCard({ id, title, author, description, coverImage }) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/books/${id}`)
  }

  return (
    <div 
      onClick={handleClick}
      className="flex flex-col h-full bg-[#f8eadd] rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
    >
      <img 
        src={coverImage} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-1 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{author}</p>
        <p className="text-sm text-gray-700 flex-grow">{description}</p>
      </div>
    </div>
  );
}