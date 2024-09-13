<template>
  <div>
    <h1>Book with ISBN > 1000</h1>
    <ul>
      <li v-for="book in books" :key="book.id">
        {{ book.name }} - ISBN: {{ book.isbn }}
        <button @click="updateBook(book.id, { name: 'Updated Book Name' })">Update</button>
        <button @click="deleteBook(book.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import db from '@/Firebase/init'
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  doc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore'
import { onMounted, ref } from 'vue'

export default {
  setup() {
    const books = ref([])

    const fetchBooks = async () => {
      try {
        const q = query(
          collection(db, 'books'),
          where('isbn', '>', 1000),
          orderBy('isbn', 'asc'),
          limit(10)
        )
        const querySnapshot = await getDocs(q)
        const BookArray = []
        querySnapshot.forEach((doc) => {
          BookArray.push({ id: doc.id, ...doc.data() })
        })
        books.value = BookArray
      } catch (error) {
        console.error('Query books error!', error)
      }
    }

    const updateBook = async (bookId, updatedData) => {
      try {
        const bookRef = doc(db, 'books', bookId)
        await updateDoc(bookRef, updatedData)
        alert('Book updated successfully')
        fetchBooks() 
      } catch (error) {
        console.error('Error updating book:', error)
      }
    }


    const deleteBook = async (bookId) => {
      try {
        const bookRef = doc(db, 'books', bookId)
        await deleteDoc(bookRef)
        alert('Book deleted successfully')
        fetchBooks() 
      } catch (error) {
        console.error('Error deleting book:', error)
      }
    }

    onMounted(() => {
      fetchBooks()
    })
    return {
      books,
      updateBook,
      deleteBook
    }
  }
}
</script>
