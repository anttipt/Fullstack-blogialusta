import { useEffect, useState } from 'react';
import { getArticles } from '../api';
import { Link } from 'react-router-dom';

export default function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles()
      .then(res => setArticles(res.data))
      .catch(err => console.error('Virhe haettaessa artikkeleita:', err.message));
  }, []);

  return (
    <div>
      <h2>Artikkelit</h2>
      <ul>
        {articles.map(article => (
          <li key={article._id}>
            <Link to={`/article/${article._id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
