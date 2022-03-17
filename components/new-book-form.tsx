import { useState } from 'react'
import axios from 'axios'

import Header from './header'
import Input from './input'
import TextArea from './text-area'
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

  const addBook = async () => {
    setLoading(true)

    const data = { title, author, description, imageUrl: 'https://picsum.photos/125/200' }
    const res = await axios({ method: 'POST', url: '/api/books', data })

    setLoading(false)
    onCreate()
  }

  const isValid = title.length > 0 && author.length > 0 && description.length > 0

  return (
    <div className="space-y-12">
      <Header
        title="Add a new book"
        extra={
          <span className="uppercase font-thin text-gray-500 text-xl" onClick={onClose}>
            x
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
      <div>
        <Button onClick={addBook} loading={loading} disabled={!isValid}>
          Save
        </Button>
      </div>
    </div>
  )
}

export default NewBookForm
