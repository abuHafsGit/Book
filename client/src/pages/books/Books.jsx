import React, { useState } from 'react';
import { useBookContext } from '../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BookCard from '../../components/ui/BookCard';
const Books = () => {
    const { markedAsRead, handleMarkAsRead, wishList, handleWishList } = useBookContext();
    const [sortedBy, setSortedBy] = React.useState(null);
    const [filtered, setFiltered] = useState(markedAsRead);

    const handleSortByPages = () => {
        const sortedBooks = [...markedAsRead].sort((a, b) => a.totalPages - b.totalPages);
        setFiltered(sortedBooks);
        console.log(sortedBooks);
    };

    const handleSortByRating = () => {
        const sortedBooks = [...markedAsRead].sort((a, b) => b.rating - a.rating);
        setFiltered(sortedBooks);
        console.log(sortedBooks);
    };

    return (
        <div>
            <div className=' flex justify-center items-center'>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">sort by:  ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => handleSortByPages('pages')}><a>pages</a></li>
                        <li onClick={() => handleSortByRating('rating')}><a>rating</a></li>
                    </ul>
                </div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Marked as Read</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <h2>Marked as Read</h2>
                    <div className=' grid grid-cols-2 gap-4 md:grid-cols-3'>
                        {filtered.map((book, index) => (
                            <BookCard key={index} book={book} handleAction={handleMarkAsRead} actionLabel="Mark as Unread" />
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Wishlist</h2>
                    <div className=' grid grid-cols-2 gap-4 md:grid-cols-3'>
                        {wishList.map((book, index) => (
                            <BookCard key={index} book={book} handleAction={handleWishList} actionLabel="Remove from Wishlist" />
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;