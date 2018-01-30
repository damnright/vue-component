import Vue from 'vue';
import Router from 'vue-router';
import home from '../pages/home.vue';
import tabbar from '../pages/tabbar.vue';
import sidelist from '../pages/sidelist.vue';
import multiSelect from '../pages/multiSelect'
import multiSelect1 from '../pages/multiSelect1'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/tabbar',
      name: 'tabbar',
      component: tabbar,
    },
    {
      path: '/sidelist',
      name: 'sidelist',
      component: sidelist,
    },
    {
      path: '/multiSelect',
      name: 'multiSelect',
      component: multiSelect,
    },
    {
      path: '/multiSelect1',
      name: 'multiSelect1',
      component: multiSelect1,
    }
  ],
});

