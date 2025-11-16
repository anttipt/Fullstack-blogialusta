import { useState } from 'react';
import { createArticle } from '../api';
import { useNavigate } from 'react-router-dom';

export default function ArticleForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createArticle({ title, content, author });
      navigate('/'); // Palaa etusivulle onnistuneen tallennuksen jälkeen
    } catch (err) {
      console.error('Virhe tallennuksessa:', err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Uusi artikkeli</h2>
      <input
        type="text"
        placeholder="Otsikko"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Sisältö"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Kirjoittaja"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <button type="submit">Julkaise</button>
    </form>
  );
}
