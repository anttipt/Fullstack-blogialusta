import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getArticle, deleteArticle } from '../api';

export default function ViewArticle() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getArticle(id)
      .then(res => setArticle(res.data))
      .catch(err => setError('Artikkelia ei löytynyt'));
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Haluatko varmasti poistaa artikkelin?')) {
      await deleteArticle(id);
      navigate('/');
    }
  };

  if (error) return <p>{error}</p>;
  if (!article) return <p>Ladataan artikkelia...</p>;

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <p><em>Kirjoittanut: {article.author}</em></p>
      <button onClick={() => navigate(`/edit/${id}`)}>Muokkaa</button>
      <button onClick={handleDelete}>Poista</button>
    </div>
  );
}
