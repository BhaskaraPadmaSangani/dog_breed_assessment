import Vue from "vue";
import Router from "vue-router";
import BreedList from "../components/BreedList";
import ViewParticularBreedImages from "../components/ViewParticularBreedImages";
import SearchComponent from "../components/SearchComponent";
import PageNotFound from "../views/PageNotFound.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: BreedList
  },
  {
    path: "/images/:name",
    component: ViewParticularBreedImages
  },
  {
    path: "/search",
    component: SearchComponent
  },
  {
    path: "*",
    name: "PageNotFound",
    component: PageNotFound,
  }
];

const router = new Router({
  routes,
  mode: "history"
});

export default router;
