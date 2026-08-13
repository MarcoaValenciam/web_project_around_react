import { createContext } from 'react';

// const CurrentUserContext = createContext(
//     currentUser = {
//         name: "Jacques Cousteau",
//         about: "Explorer",
//         avatar: "https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg",
//     }


const CurrentUserContext = createContext({
    currentUser : {
        name: "",
        about: "",
        avatar: "",
    }
});

export default CurrentUserContext;