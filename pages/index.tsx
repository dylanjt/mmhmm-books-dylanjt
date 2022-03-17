import { useState, useEffect, useCallback } from 'react'
import type { NextPage } from 'next'
import axios from 'axios'

import { Book } from '../types/book'

const Index: NextPage = () => {
  const [books, setBooks] = useState<Book[]>([])

  const getBooks = useCallback(async () => {
    const res = await axios({ method: 'GET', url: '/api/books' })

    setBooks(res.data)
  }, [])

  useEffect(() => {
    getBooks()
  }, [])

  return <div>Hello, world.</div>
}

export default Index
