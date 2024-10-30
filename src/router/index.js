import ProductCrawler from '@/components/ProductCrawler.vue';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ProductCrawler, // Your component here
  },
];

const router = new Router({
  mode: 'history', // Optional: use history mode
  routes,
});

export default router;
