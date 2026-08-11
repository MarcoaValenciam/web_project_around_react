import { useState } from 'react'
import { useEffect } from 'react';
import Header from "../Header/Header.jsx"
import Main from '../Main/Main.jsx'
import Footer from '../Footer/Footer.jsx';
import { api } from '../../utils/api.js';
import  CurrentUserContext  from '../../contexts/CurrentUserContext.js';

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    (async () => {
      await api.getUserInfo().then((data) => {
        setCurrentUser(data);
      }).catch((error) => console.error(error)) ;
    })();
  }, []);

  const handleUpdateUser = async (data) => {
    try {
      const newData = await api.setUserInfo(data);
      setCurrentUser(newData);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleUpdateAvatar = async(data) => {
    try {
      const newData = await api.setUserAvatar(data);
      setCurrentUser(newData);
    } catch (error) {
      console.error(error);
    }
  };
  
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const fetchCards = async () => {
        try {
            const initialCards = await api.getInitialCards();
            setCards(initialCards);
        } catch (err) {
            console.log(err);
        }
    };
    fetchCards();
  }, []);   

  async function handleCardLike(card) {
    // Verifica una vez más si a esta tarjeta ya les has dado like
    const isLiked = card.isLiked;
    // Envía una solicitud a la API y obtén los datos actualizados de la tarjeta
    try {
        const newCard = await api.changeLikeCardStatus(card._id, !isLiked);
        setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
    } catch (error) {
        console.error(error);
    }
  }

  async function handleCardDelete(card) {
    try {
      await api.deleteCard(card._id);
      setCards((state) => state.filter((currentCard) => currentCard._id !== card._id));
    } catch (error) {
      console.error(error);
    }
  }   

  const [popup, setPopup] = useState(null);
  
  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  
  function handleClosePopup() {
    setPopup(null);
  }

  function handleAddPlaceSubmit(newCard) {
    api.addNewCard(newCard)
      .then((card) => {
        setCards([card, ...cards]);
        handleClosePopup();
      })
      .catch((error) => console.error(error));
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser, handleUpdateAvatar}}>
      <div className="page page__content" id="page">
        <div className ="overlay" id="overlay"></div>
          <Header />
          <Main popup={popup} handleOpenPopup={handleOpenPopup} handleClosePopup={handleClosePopup} cards={cards} handleCardLike={handleCardLike} handleCardDelete={handleCardDelete} handleAddPlaceSubmit={handleAddPlaceSubmit} /> 
          <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App 
