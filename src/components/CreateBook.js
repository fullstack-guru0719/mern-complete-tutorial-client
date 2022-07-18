import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

const initialValue = {
    title: '',
    isbn:'',
    author:'',
    description:'',
    published_date:'',
    publisher:''
}

const CreateBook = (props) => {

    const [data, setData] = useState(initialValue)

    const onChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:8082/api/books', data)
            .then(res => {
                setData(initialValue);
                props.history.push('/');
            })
            .catch(err => {
                console.log("Error in CreateBook!");
            })
            

    };
    return (
        <div className="CreateBook">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 m-auto'>
                        <br/>
                        <Link to="/" className="btn btn-outline-warning float-left">
                            Show BooK List
                        </Link>
                    </div>

                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Add Book</h1>
                        <p className="lead text-center">
                            Create new book
                        </p>

                        <form noValidate onSubmit={onSubmit}>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Title of the Book'
                                    name='title'
                                    className='form-control'
                                    value={data.title}
                                    onChange={onChange}
                                />
                            </div>
                            <br />

                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='ISBN'
                                    name='isbn'
                                    className='form-control'
                                    value={data.isbn}
                                    onChange={onChange}
                                />
                            </div>


                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Author'
                                    name='author'
                                    className='form-control'
                                    value={data.author}
                                    onChange={onChange}
                                />
                            </div>

                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Describe this book'
                                    name='description'
                                    className='form-control'
                                    value={data.description}
                                    onChange={onChange}
                                />
                            </div>

                            <div className='form-group'>
                                <input
                                    type='date'
                                    placeholder='published_date'
                                    name='published_date'
                                    className='form-control'
                                    value={data.published_date}
                                    onChange={onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Publisher of this Book'
                                    name='publisher'
                                    className='form-control'
                                    value={data.publisher}
                                    onChange={onChange}
                                />
                            </div>

                            <input
                                type="submit"
                                className="btn btn-outline-warning btn-block mt-4"
                            />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateBook;