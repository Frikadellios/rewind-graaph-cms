import { BlogArticleLink } from "~/contents";

import type { Articles } from "~/types";

/**
 * The card view of all blog articles
 */

interface BlogArticlesProps {
  articles: Articles;
}

export const BlogArticles = ({ articles }: BlogArticlesProps) => {
  return (
    <div className="stack-v gap-10">
      {articles.map((article) => {
        return <BlogArticleLink key={article.id} article={article} />;
      })}
    </div>
  );
};
