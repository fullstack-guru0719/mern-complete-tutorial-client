import React, {useState, useEffect } from 'react';
import { Link,useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const initialValue = {
  title: '',
  isbn:'',
  author:'',
  description:'',
  published_date:'',
  publisher:''
}

const UpdateBookInfo = () => {
  const [data, setData] = useState(initialValue)
  const params = useParams();
  const history = useHistory();


  useEffect(()=>{
    axios
      .get('http://localhost:8082/api/books/'+params.id)
      .then(res => {

        setData(res.data)
      })
      .catch(err => {
        console.log("Error from UpdateBookInfo");
      })
  });

  const onChange = (e) => {
    const value = e.target.value;
    setData({
        ...data,
        [e.target.name]: value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .put('http://localhost:8082/api/books/'+params.id, data)
      .then(res => {
        history.push('/show-book/'+params.id);
      })
      .catch(err => {
        console.log("Error in UpdateBookInfo!");
      })
  };


    return (
      <div className="UpdateBookInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show BooK List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Book</h1>
              <p className="lead text-center">
                  Update Book's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor="title">Title</label>
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
            <label htmlFor="isbn">ISBN</label>
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
            <label htmlFor="author">Author</label>
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
            <label htmlFor="description">Description</label>
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
            <label htmlFor="published_date">Published Date</label>
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
            <label htmlFor="publisher">Publisher</label>
              <input
                type='text'
                placeholder='Publisher of this Book'
                name='publisher'
                className='form-control'
                value={data.publisher}
                onChange={onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Book</button>
            </form>
          </div>

        </div>
      </div>
    );
  }

export default UpdateBookInfo;