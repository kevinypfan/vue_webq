import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import About from './views/About.vue'
import Login from './views/Login.vue'
import Main from './views/Main.vue'
import Note_new from './views/Note_new.vue'
import Note_upload from './views/Note_upload.vue'
import My_note from './views/My_note.vue'
Vue.use(Router)


export default new Router({
    routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: About
    // },
        {
            path: '/Login',
            name: 'Login',
            component: Login
    },
        {
            path: '/Main',
            name: 'Main',
            component: Main
    },

        {
            path: '/Note_new',
            name: 'Note_new',
            component: Note_new
    },
        {
            path: '/Note_upload',
            name: 'Note_upload',
            component: Note_upload
    },
        {
            path: '/My_note',
            name: 'My_note',
            component: My_note
    },
  ]
})
