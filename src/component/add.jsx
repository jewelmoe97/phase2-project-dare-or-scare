import React from "react";
import { useState } from "react";
import Nav from "./nav";
import Footer from './footer.jsx';


function Add(){

    const [name,settitle] = useState('');
    const [rating,setrate] =useState('');
    const [src,setsrc] = useState('');
    const [director,setdirector] = useState('');
    const [language,setlanguauge] = useState('');
    const [runtime,setruntime] = useState('');
    const [type,settype] = useState('movie');
    const [popular,setpopular] = useState('false');



    function sub(e){
        e.preventDefault();

        const data = {
            name,
            rating,
            src,
            director,
            language,
            runtime,
            type,
            popular
        }
        
      const Url = " http://localhost:3000/movie";



      fetch(Url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((result)=>{
        console.log(result);
        console.log('added successfully');
        alert('Added Successfully');
        settitle('');
        setrate('');
        setsrc('');
        setdirector('');
        setlanguauge('');
        setruntime('');
        settype('');
        setpopular('');

        
      })

      .catch((err)=>{
        console.log(err);
      })
    }



    return(
        <div>
        <Nav/>
        <div className="container border border-warning p-2 rounded text-primary">
           
            <h1 className="text-center text-danger">Add Form</h1>

            <form className="mt-4" onSubmit={sub}>
  <div class="form-group">
    <input type="text" class="form-control" autoFocus required value={name} onChange={(e) =>{
        settitle(e.target.value);
    }} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Title" />
    
  </div>
  <div class="form-group">
    
    <input type="text" class="form-control" required  value={rating} onChange={(e)=>{
      setrate(e.target.value);
    }} id="exampleInputPassword1" placeholder="Rating(eg: 4 star)"/>
  </div>

  <div class="form-group">
   
    <input type="text" class="form-control" required  value={director} onChange={(e)=>{
      setdirector(e.target.value);
    }} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Director Name"/>
    
  </div>

  <div class="form-group">
   
    <input type="text" value={language} required  onChange={(e)=>{
      setlanguauge(e.target.value);
    }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Language"/>
    
  </div>


  <div class="form-group">
   
    <input type="text" required  value={runtime} onChange={
      (e) =>{
        setruntime(e.target.value);
      }
    } class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Run Time(eg: 1h 30min)"/>
    
  </div>

  <div class="form-group">
    
    <input type="text" required  class="form-control" value={src} onChange={(e)=>{
      setsrc(e.target.value);
    }} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Photo(url)"/>
    
  </div>


  <div class="form-group">
    <label for="exampleInputEmail1">Movies or Series Type </label>
      <select
      required 
        id="type"
        value={type}
        onChange={(e) => settype(e.target.value)}
      >
        <option value="movie">Movie</option>
        <option value="serie">Serie</option>
       
      </select>
    
  </div>


  <div class="form-group">
    <label for="exampleInputEmail1">Popular </label>
    <select
    required 
        id="type"
        value={popular}
        onChange={(e) => setpopular(e.target.value)}
      >
        <option value="true">Yes</option>
        <option value="false">No</option>
       
        </select>
    
  </div>




 
  <button type="submit" class=" btn btn-primary text-center">ADD</button>
</form>
        </div>
        <Footer/>
        </div>
    )
}

export default Add;