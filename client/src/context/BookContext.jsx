import { createContext, useContext, useState } from "react";


const createBookContext = createContext();

export const BookContextProvider = ({ children }) => {
    const [markedAsRead, setMarkedAsRead] = useState([]);
    const [wishList, setWishList] = useState([]);

    const handleWishList = (expectedBook) => {
        const isExistingInRead = markedAsRead.find(book => book.bookName === expectedBook.bookName);

        if (isExistingInRead) {
            alert(`You have already marked ${expectedBook.bookName} as read!`);
            return;
        }

        if (wishList.includes(expectedBook)) {
            alert(`You have already added ${expectedBook.bookName} to your wishlist!`);
        } else {
            setWishList([...wishList, expectedBook]);
            alert(`You have added ${expectedBook.bookName} to your wishlist!`);
        }
    };


    const handleMarkAsRead = (expectedBook) => {

        console.log(markedAsRead + 'markedAsRead');
        if (markedAsRead.includes(expectedBook)) {
            alert(`You have already marked ${expectedBook.bookName} as read!`);
        } else {
            setMarkedAsRead([...markedAsRead, expectedBook]);
            alert(`You have marked ${expectedBook.bookName} as read!`);
        }

    }

    const value = {
        markedAsRead,
        handleMarkAsRead,
        setMarkedAsRead,
        wishList,
        setWishList,
        handleWishList
    }
    return <createBookContext.Provider value={value}>{children}</createBookContext.Provider>;
}

export const useBookContext = () => {
    return useContext(createBookContext);
}
