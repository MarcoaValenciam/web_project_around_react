import editButton from '../../../images/Edit_Button.png'
import { useContext } from 'react';
import Popup from './components/Popup/Popup.jsx';
import NewCard from './components/form/NewCard/NewCard.jsx';
import EditProfile from './components/form/EditProfile/EditProfile.jsx';
import EditAvatar from './components/form/EditAvatar/EditAvatar.jsx';
import Card from './components/Card/Card.jsx';
import ImagePopup from './components/ImagePopup/ImagePopup.jsx';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';

export default function Main(props) {
    const { currentUser, handleUpdateUser, handleUpdateAvatar } = useContext(CurrentUserContext);
    const newCardPopup = { title: "Nuevo lugar", children: <NewCard handleAddPlaceSubmit={props.handleAddPlaceSubmit} /> };
    const EditProfilePopup = { title: "Editar perfil", children: <EditProfile name={currentUser.name} about={currentUser.about} handleUpdateUser={handleUpdateUser} /> };
    const EditAvatarPopup = { title: "Cambia foto de perfil", children: <EditAvatar handleUpdateAvatar={handleUpdateAvatar} /> };

    function onSelectedCard(card) {
        props.handleOpenPopup({ title: null, children: <ImagePopup card={card} /> });
    }

    return(
        <main className="content">
            <section className="profile">
            <div className="profile__avatar">
                <img className="profile__avatar-image" src={currentUser.avatar} alt="avatar" />
                <div className="profile__avatar-edit" onClick={() => props.handleOpenPopup(EditAvatarPopup)}></div>
            </div>
            <div className="profile__info">
                <h1 className="profile__info-name">{currentUser.name}</h1>
                <img className="profile__info-edit-button" src={editButton} alt="botón edición de perfil" onClick={() => props.handleOpenPopup(EditProfilePopup)} />
                <p className="profile__info-activity">{currentUser.about}</p>
            </div>
            <div className="profile__place-add">
                <div className="profile__place-add profile__place-add-button" id="profile__place-add-button" onClick={() => props.handleOpenPopup(newCardPopup)}>
                </div>
            </div>
            </section>
            <section className ="elements">
                <ul className="elements__list">
                    {props.cards.map((card) => (
                        <Card key={card._id} card={card} onSelectedCard={onSelectedCard} onCardLike={props.handleCardLike} onCardDelete={props.handleCardDelete} />
                    ))}     
                </ul>
            </section>
            {props.popup && (
                <Popup onClose={props.handleClosePopup} title={props.popup.title} >
                    {props.popup.children}
                </Popup>
            )}
        </main>
    );
}