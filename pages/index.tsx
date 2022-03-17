import { useState, useEffect, useCallback } from 'react'
import type { NextPage } from 'next'
import axios from 'axios'

import { Book } from '../types/book'
import Header from '../components/header'
import Button from '../components/button'
import ErrorAlert from '../components/error-alert'
import BookCard from '../components/book-card'
import NewBookForm from '../components/new-book-form'

const Index: NextPage = () => {
  const [books, setBooks] = useState<Book[]>([])
  const [newBookFormVisible, setNewBookFormVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getBooks = useCallback(async () => {
    setError(false)
    setLoading(true)
    setBooks([])

    try {
      const res = await axios({ method: 'GET', url: '/api/books' })
      setBooks(res.data)
    } catch (e) {
      setError(true)
    }

    setLoading(false)
  }, [])

  useEffect(() => {
    getBooks()
  }, [getBooks])

  return (
    <>
      {!newBookFormVisible && (
        <div className="space-y-8">
          <Header
            title="Bookshelf"
            extra={<Button onClick={() => setNewBookFormVisible(true)}>Add book</Button>}
          />
          <div className="space-y-4">
            {loading && <div>Loading...</div>}
            {error && (
              <ErrorAlert content="An error occurred, please refresh the page to try again." />
            )}
            {!loading &&
              books.map((book) => (
                <BookCard
                  book={book}
                  onRemove={() => {
                    getBooks()
                  }}
                />
              ))}
          </div>
        </div>
      )}
      {newBookFormVisible && (
        <NewBookForm
          onCreate={() => {
            setNewBookFormVisible(false)
            getBooks()
          }}
          onClose={() => {
            setNewBookFormVisible(false)
          }}
        />
      )}
    </>
  )
}

export default Index
