import Vue from 'vue'
import VueRouter from 'vue-router'


import books from '@/views/Books.vue'
import bookEdit from '@/views/BookEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () =>import("../views/Login.vue")
  },
  {
    path: '/books',
    name: 'books',
    component: books
  },
  {
    path: '/books/:id', //this points to bookEdit not book
    name: 'booksEdit',
    component: bookEdit
  },
  {
    path: '/authors', //this points to bookEdit not book
    name: 'authors',
    component: ()=>import('../views/Authors.vue')
  },
  {
    path: '/authors/:id', //this points to bookEdit not book
    name: 'authorsEdit',
    component: ()=>import('../views/AuthorEdit.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
