import React from 'react'
import CardDisplay from './CardDisplay'
import { useState, useEffect } from 'react';

const Home = () => {
  const url = `https://fakestoreapi.com/products`;
  const [product, setData] = useState([]);
  const [records, setRecords] = useState(product)
  const [button, setButton] = useState('all')
      useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(data => {
        setData(data)
        setRecords(data)
    })
    .catch(err => console.error(err));
    },[])
  const Filter =(event) =>{
    setRecords(product.filter(f=> f.title.toLowerCase()
    .includes(event.target.value)))

  }

  const filterData =(category)=>{
    if(category=="all"){
      setRecords(product);
      setButton("all");
      return;
    }
    const Filter =(category) =>{
    setRecords(product.filter(f=> f.category.toLowerCase()
    .includes(category.target.value))
    )}
    setRecords(Filter);
    setButton("category");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
        <div className="container d-flex justify-content-between">
          <a className="navbar-brand" href="#">Navbar</a>
          <input onChange={Filter} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  style={{width:"fit-content"}}/>
        </div>
      </nav>

     <div className="container mb-5">
      <div className="d-flex justify-content-center gap-5">
          <button onClick={()=>filterData("all")} type="button" className="btn btn-success">All</button>
          <button onClick={()=>filterData("jewelery")} type="button" className="btn btn-danger">Man</button>
          <button onClick={()=>filterData("electronics")} type="button" className="btn btn-warning">Woman</button>
      </div>
     </div>
       <CardDisplay records={records}/>
    </>
  )
}

export default Home
