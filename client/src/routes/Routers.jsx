import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/HomePage";
import Books from "../pages/books/Books";
import BookDetails from "../pages/bookDetails/BookDetails";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'books',
                element: <Books />
            },
            {
                path: "bookDetails/:id",
                loader: () => fetch('/booksData.json'),
                element: <BookDetails />
            }

        ],
        errorElement: <h1>page not found</h1>

    },


])