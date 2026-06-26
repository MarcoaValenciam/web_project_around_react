import avatar from '../../../images/avatar_profile.jpg'
import editButton from '../../../images/Edit_Button.png'
import { useState } from 'react';
import Popup from './components/Popup/Popup.jsx';
import NewCard from './components/form/NewCard/NewCard.jsx';
import EditProfile from './components/form/EditProfile/EditProfile.jsx';
import EditAvatar from './components/form/EditAvatar/EditAvatar.jsx';
import Card from './components/Card/Card.jsx';
import ImagePopup from './components/ImagePopup/ImagePopup.jsx';

const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];


export default function Main(){
    const [popup, setPopup] = useState(null);
    const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
    const EditProfilePopup = { title: "Editar perfil", children: <EditProfile name="Jaques Cousteau" activity="Explorador" /> };
    const EditAvatarPopup = { title: "Cambia foto de perfil", children: <EditAvatar link={avatar} /> };

    function handleOpenPopup(popup) {
      setPopup(popup);
    }
    
    function handleClosePopup() {
      setPopup(null);
    }
    
    function onSelectedCard(card) {
        handleOpenPopup({ title: null, children: <ImagePopup card={card} /> });
    }

    return(
        <main className="content">
            <section className="profile">
            <div className="profile__avatar">
                <img className="profile__avatar-image" src={avatar} alt="avatar" />
                <div className="profile__avatar-edit" onClick={() => handleOpenPopup(EditAvatarPopup)}></div>
            </div>
            <div className="profile__info">
                <h1 className="profile__info-name">Jaques Cousteau</h1>
                <img className="profile__info-edit-button" src={editButton} alt="botón edición de perfil" onClick={() => handleOpenPopup(EditProfilePopup)} />
                <p className="profile__info-activity">Explorador</p>
            </div>
            <div className="profile__place-add">
                <div className="profile__place-add profile__place-add-button" id="profile__place-add-button" onClick={() => handleOpenPopup(newCardPopup)}>
                </div>
            </div>
            </section>
            <section className ="elements">
                <ul className="elements__list">
                    {cards.map((card) => (
                        <Card key={card._id} card={card} onSelectedCard={onSelectedCard} />
                    ))}     
                </ul>
            </section>
            {popup && (
                <Popup onClose={handleClosePopup} title={popup.title} >
                    {popup.children}
                </Popup>
            )}
        </main>
    );
}