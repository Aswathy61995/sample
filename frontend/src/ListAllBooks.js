import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BellIcon from 'react-bell-icon';
import Book from './Book';
import ProductstylingController from './ProductstylingController'
class ListAllBooks extends React.Component {


    state = {

        books: [],
        editMode :false
    }
edit(id){
this.setState({
    editMode:true
})
let editingItem =this.state.books.find(book=>{
    return book.id==id
})
this.setState({
    title:editingItem.title,
    description:editingItem.description
})
}

    componentDidMount() {
        Book.getAllBooks()
            .then(data => {
                this.setState({
                    books: data.data.books
                });
            });
        // alert(this.state.books)
    }
    // addtoCart=(title)=>{
    //     setCart([...cart,title]);
    // }
    render() {

        return (

            <div className="container">
                <div className="coloumn">

        <h1>Blog List</h1>
        </div>
                {/* <button id="bell">
                    <BellIcon width='40' active={true} animate={true} />
                    <p id="count">{(this.state.books.length)}</p>   </button > */}

                <div className="row" >

                {
                    this.state.books.map(book =>
                        // <tr>
                        //     <td>{book.title}</td>
                        //     <td>{book.price}</td>
                        //     <td>{book.imagePath}</td>
                        //     <td onClick={()=>{this.addtoCart(book)}}>Add to cart</td>
                        // </tr>

                        <div>
                            <ProductstylingController booksObject={book} title={book.title} description={book.description} imagePath={book.imagePath} />
                            {/* image={book.image}     */}
<button type="submit" onClick={this.edit.bind(this,book.id)}>< Link to="/addnewbook">Edit</ Link></button>
                        
                        </div>

                    )}
                    </div>
                   
                    <br></br>
                  <div> <button id="back" >< Link to="/">Back</ Link></button></div> 
            </div>




        );
    }
}



export default ListAllBooks;
