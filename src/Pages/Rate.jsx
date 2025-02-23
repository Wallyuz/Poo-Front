import React, { useState } from 'react';
import Header from '../Components/Header/header';
import Footer from '../Components/Footer/footer';
import './HomeStyle.css'; 

function Rate() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar a avaliação para o servidor
    console.log('Rating:', rating);
    console.log('Comment:', comment);
  };

  return (
    <div className="App">
      {/* <Header /> */}
      <div className="container">
        <h1 className="Title">Avalie o Atendimento</h1>
        <form onSubmit={handleSubmit}>
          <div className="rating">
            <label>
              <input
                type="radio"
                value="1"
                checked={rating === '1'}
                onChange={handleRatingChange}
              />
              1
            </label>
            <label>
              <input
                type="radio"
                value="2"
                checked={rating === '2'}
                onChange={handleRatingChange}
              />
              2
            </label>
            <label>
              <input
                type="radio"
                value="3"
                checked={rating === '3'}
                onChange={handleRatingChange}
              />
              3
            </label>
            <label>
              <input
                type="radio"
                value="4"
                checked={rating === '4'}
                onChange={handleRatingChange}
              />
              4
            </label>
            <label>
              <input
                type="radio"
                value="5"
                checked={rating === '5'}
                onChange={handleRatingChange}
              />
              5
            </label>
          </div>
          <div className="comment">
            <textarea
              value={comment}
              onChange={handleCommentChange}
              placeholder="Deixe seu comentário"
            />
          </div>
          <button type="submit">Enviar Avaliação</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Rate;