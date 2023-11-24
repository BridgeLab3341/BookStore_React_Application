import React, { useEffect, useState } from "react";
import SearchBar from "../Header/Header";
import BookList from "./BookList/BookList";
import { FetchAllBooks } from "../Services/UserServices";
import '../DashBoard/DashBoard.css'


export default function DashBoard() {

    const [posts, setposts] = useState([]);

    const GetAllBooks = async () => {
        let response = await FetchAllBooks();
        console.log(response.data.data)
        setposts(response.data.data)
    }
    useEffect(() => {
        GetAllBooks()
    }, [])
    return (
        <div>
            <SearchBar />
            <div className="items">
                <h4>Books</h4>
                <div><p>(3 items)</p></div>
            </div>
            <div className="all-books">
                {
                    posts.map((data) => (<BookList key={data.id} data={data} props={GetAllBooks} />))
                }
            </div>
        </div>
    )
}