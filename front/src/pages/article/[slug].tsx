import { ArticleView } from "./article-view";
import { useParams } from "react-router";

export const Article = () => {
  const { slug } = useParams<{ slug: string }>();

  let articleBody;

  if (slug) {
    articleBody = <ArticleView slug={slug} />;
  } else {
    articleBody = <h1>Article not found</h1>;
  }

  return <>{articleBody}</>;
};
