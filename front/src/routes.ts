import { Article } from "pages/article/[slug]";

export default [
  {
    path: "/welcome",
    component: "welcome",
  },
  {
    path: "/article/:slug",
    component: "article",
  },
];
