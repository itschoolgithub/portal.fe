import ArticlePage from '@/pages/ArticlePage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import MainPage from '@/pages/MainPage.vue'
import RegisterPage from '@/pages/RegisterPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import ArticlesPage from '@/pages/admin/ArticlesPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/articles/:id',
      name: 'article',
      component: ArticlePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      meta: {
        guestOnly: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage,
      meta: {
        guestOnly: true
      }
    },
    {
      path: '/admin/articles',
      name: 'admin_articles',
      component: ArticlesPage,
      meta: {
        authOnly: true
      }
    }
  ],
});

router.beforeEach(function (to) {
  const authStore = useAuthStore();

  if (to.meta.guestOnly) {
    if (authStore.isAuth) {
      return {
        name: 'main'
      }
    }
  }

  if (to.meta.authOnly) {
    if (!authStore.isAuth) {
      return {
        name: 'login'
      }
    }
  }
});

export default router
