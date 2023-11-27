import React, { useEffect, useState } from "react";
import SearchBar from "../Header/Header";
import BookList from "./BookList/BookList";
import { FetchAllBooks } from "../Services/UserServices";
import '../DashBoard/DashBoard.css'
import BookDetails from "./BookDetails/BookDetails";


export default function DashBoard() {

    const [toggle,setToggle]=useState(true);
    
    const handleToggle=()=>{
        setToggle(!toggle);
    }
    const [posts, setposts] = useState([]);

    const GetAllBooks = async () => {
        let response = await FetchAllBooks();
        console.log(response.data.data)
        setposts(response.data.data)
    }
    useEffect(() => {
        GetAllBooks()
    }, [])


    const [book,setBook]=useState([]);

    const FetchBookById=async()=>{
        let response=await FetchBookById();
        console.log("Fetch By Id")
        console.log(response.data.data)
        setBook(response.data.data)
    }
    // useEffect(()=>{
    //     FetchBookById()
    // },[])

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