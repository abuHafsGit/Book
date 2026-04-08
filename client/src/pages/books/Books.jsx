import React from 'react';
import { useBookContext } from '../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BookCard from '../../components/ui/BookCard';
const Books = () => {
    const { markedAsRead, handleMarkAsRead, wishList, handleWishList } = useBookContext();

    return (
        <Tabs>
            <TabList>
                <Tab>Marked as Read</Tab>
                <Tab>Wishlist</Tab>
            </TabList>

            <TabPanel>
                <h2>Marked as Read</h2>
                <div className=' grid grid-cols-2 gap-4 md:grid-cols-3'>
                    {markedAsRead.map((book, index) => (
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
    );
};

export default Books;