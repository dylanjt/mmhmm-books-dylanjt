import { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import Header from './header'
import Input from './input'
import TextArea from './text-area'
import ErrorAlert from './error-alert'
import Button from './button'

interface NewBookFormProps {
  onCreate: () => void
  onClose: () => void
}

const NewBookForm = ({ onCreate, onClose }: NewBookFormProps) => {
  const [title, setTitle] = useState<string>('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const addBook = async () => {
    setLoading(true)

    try {
      const data = {
        title,
        author,
        description,
        imageUrl: imageUrl || 'https://picsum.photos/125/200',
      }
      await axios({ method: 'POST', url: '/api/books', data })
      onCreate()
    } catch (e) {
      setError(true)
    }

    setLoading(false)
  }

  const isValid = title.length > 0 && author.length > 0 && description.length > 0

  return (
    <div className="space-y-12">
      <Header
        title="Add a new book"
        extra={
          <span
            className="cursor-pointer text-4xl text-gray-400 hover:text-gray-500 font-thin"
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faTimes} />
          </span>
        }
      />
      <div className="space-y-8">
        <div>
          <Input label="Title" value={title} onChange={setTitle} />
        </div>
        <div>
          <Input label="Author" value={author} onChange={setAuthor} />
        </div>
        <div>
          <TextArea label="Description" value={description} onChange={setDescription} />
        </div>
        <div>
          <Input label="Image URL" value={imageUrl} onChange={setImageUrl} />
        </div>
      </div>
      <div className="space-y-4">
        {error && <ErrorAlert content="An error occurred, please try again." />}
        <Button onClick={addBook} loading={loading} disabled={!isValid}>
          Save
        </Button>
      </div>
    </div>
  )
}

export default NewBookForm
