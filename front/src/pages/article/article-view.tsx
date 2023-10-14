import { useEffect, useState } from "react";
import client from "./../_common/sanity/client";

interface ArticleProps {
  slug: string;
}

interface ArticleData {
  title: string;
  body: string;
}

export const ArticleView = (props: ArticleProps) => {
  const [articleData, setArticleData] = useState<ArticleData | null>(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "article" && slug.current == $slug]`, {
        slug: props.slug,
      })
      .then((res) => {
        setArticleData(res[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  return (
    <article>
      <h1>{articleData?.title}</h1>
      <p>{articleData?.body}</p>
    </article>
  );
};
