import { lazy, useEffect, useState } from "react";
import path from "path";
import { SanityClient } from "sanity";

interface ArticleProps {
  slug: string;
}

interface ArticleData {
  title: string;
  body: string;
}

export const ArticleView = (props: ArticleProps) => {
  const [articleData, setArticleData] = useState<ArticleData | null>(null);

  let client: SanityClient | null = null;

  const displayArticle = async () => {
    useEffect(() => {
      client
        ?.fetch(`*[_type == "article" && slug.current == $slug]`, {
          slug: props.slug,
        })
        .then((res) => {
          setArticleData(res[0]);
        })
        .catch((err) => {
          console.error(err);
        });
    });
  };

  useEffect(() => {
    import(path.join(__dirname, "./../_common/sanity/client")).then((res) => {
      client = res.default;
      displayArticle();
    });
  });

  return (
    <article>
      <h1>{articleData?.title}</h1>
      <p>{articleData?.body}</p>
    </article>
  );
};
