import { createContext } from 'react';

const CurrentUserContext = createContext({
    currentUser : {
        name: "Jacques Cousteau",
        about: "Explorer",
        avatar: "https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg"
    },
    handleUpdateUser: () => {},   // Función por defecto vacía
    handleUpdateAvatar: () => {}  // Función por defecto vacía
});

export default CurrentUserContext;