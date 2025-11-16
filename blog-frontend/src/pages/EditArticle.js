import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getArticle, updateArticle } from '../api';

export default function EditArticle() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getArticle(id).then(res => {
      setTitle(res.data.title);
      setContent(res.data.content);
      setAuthor(res.data.author);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateArticle(id, { title, content, author });
    navigate(`/article/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Muokkaa artikkelia</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
      <input value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <button type="submit">Tallenna muutokset</button>
    </form>
  );
}
