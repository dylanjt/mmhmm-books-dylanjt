import { useState, useCallback } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faSpinner } from '@fortawesome/free-solid-svg-icons'

import { Book } from '../types/book'

interface BookCardProps {
  book: Book
  onRemove: () => void
}

const BookCard = ({ book, onRemove }: BookCardProps) => {
  const [loading, setLoading] = useState(false)

  const removeBook = useCallback(async () => {
    setLoading(true)
    await axios({ method: 'DELETE', url: `/api/books/${book.id}` })
    setLoading(false)

    onRemove()
  }, [book.id])

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex flex-row">
        <div className="flex-grow grid grid-cols-5 gap-4">
          <div className="col-span-1">
            <img src={book.imageUrl} alt="" />
          </div>
          <div className="col-span-4 space-y-2">
            <div className="text-lg font-bold">{book.title}</div>
            <div className="text-gray-600 text-sm">{book.author}</div>
            <div className="">{book.description}</div>
          </div>
        </div>
        <div className="flex-grow-0">
          <FontAwesomeIcon
            icon={loading ? faSpinner : faTrashCan}
            className="text-gray-400 cursor-pointer"
            onClick={() => !loading && removeBook()}
          />
        </div>
      </div>
    </div>
  )
}

export default BookCard
