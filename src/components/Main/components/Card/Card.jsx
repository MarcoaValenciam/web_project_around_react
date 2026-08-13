import React, { useContext } from 'react';
import CurrentUserContext from '../../../../contexts/CurrentUserContext.js';

export default function Card(props) {
    const { currentUser } = useContext(CurrentUserContext);
    const { name, link, isLiked } = props.card;
    const { onSelectedCard } = props;
    const imageComponent = {
      name, 
      link
    }
    // Verifica si el usuario actual le ha dado "like" a la tarjeta
    const cardLikeButtonClassName = `card__like-button ${isLiked ? 'card__like-button_is-active' : ''}`;
    
    function handleLikeClick() {
      alert('hola');
      // alert("Se ha dado like a la tarjeta: " + name + " con link: " + link + " y el usuario actual es: " + currentUser.name + " con id: " + currentUser._id + " y el id de la tarjeta es: " + props.card._id + " y el estado de like es: " + isLiked);
      // props.onCardLike(props.card);
        // props.handleCardLike(props.card);
    }

    function handleCardDelete() {
      alert("Se ha eliminado la tarjeta: " + name + " con link: " + link + " y el usuario actual es: " + currentUser.name + " con id: " + currentUser._id + " y el id de la tarjeta es: " + props.card._id);
      props.handleCardDelete(props.card);
    }

  return (
    <li className="card">
      <img className="card__image" src={link} alt={name} onClick = {()=> {onSelectedCard(imageComponent)}} />
      <button
        aria-label="Delete card"
        className="card__delete-button"
        type="button"
        onClick={handleCardDelete}
      />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className={cardLikeButtonClassName}
          onClick={handleLikeClick}
        />
      </div>
    </li>
  );
}