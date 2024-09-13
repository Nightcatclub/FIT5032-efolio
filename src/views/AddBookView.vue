<template>
  <div>
    <h1>Add Book</h1>
    <form @submit.prevent="addbook">
      <div>
        <label for="isbn"> Isbn: </label>
        <input type="text" v-model="isbn" id="isbn" required />
      </div>
      <div>
        <label for="name">Name: </label>
        <input type="text" v-model="name" id="name" required />
      </div>
      <button type="submit">Submit</button>
    </form>
    <BookList />
  </div>
</template>

<script>
import { ref } from 'vue'
import db from '@/Firebase/init'
import { collection, addDoc } from 'firebase/firestore'
import BookList from '@/components/BookList.vue'

export default {
  setup() {
    const isbn = ref('')
    const name = ref('')

    const addbook = async () => {
      try {
        const isbnNumber = Number(isbn.value)
        if (isNaN(isbnNumber)) {
          alert('input must be nmuber')
          return
        }

        await addDoc(collection(db, 'books'), {
          isbn: isbnNumber,
          name: name.value
        })
        isbn.value = ''
        name.value = ''
        alert('Add Book Successfully')
      } catch (error) {
        console.error('Error adding book', error)
      }
    }
    return {
      isbn,
      name,
      addbook
    }
  },

  components: {
    BookList
  }
}
</script>
