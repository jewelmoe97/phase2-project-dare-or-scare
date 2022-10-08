import React from "react";
import Nav from "./nav";
import Footer from "./footer";


function About(){
    return(
       
           
            <div>
                 <Nav/>
                <div className="container">
                    <div className="ibox">
                        <img src={require('../photo/a1.jpg')} className="img img-fluid border border-danger rounded"  alt="" />
                    </div>
              <div className="container mt-5">
              <h1 className="text-center text-danger"> About DARE OR SCARE!!</h1>
            <p className="text-primary text-center">
            DARE OR SCARE!!Halloween is here! Will you be scared or are you daring? Discover the scariest movies and series this Halloween.We provide  the premiere online destination for horror movie enthusiasts, providing the latest trending movies and series and general information of them.  DARE OR SCARE!! keeps users connected to all their favorites, past, present and future. Our main feature is  a user can add their favourite movies and series just by filling in the form.
            </p>
             <p className="text-primary  text-center">
             As a brand new app for this 2022 Halloween, DARE OR SCARE!! come up with the scariest of the scariest moviesand series. DARE OR SCARE!! continues to be one of the most trusted destinations for the connected generation.DARE OR SCARE!! Yes, it is the time of year where we feel the need to be scared, especially when it comes to our movie watching. 
             </p>
             <p className="text-primary text-center">
             Sure, Halloween demands a good Halloween movie. But what if you could celebrate pumpkin-spice season by watching a great Halloween movie? So, what's the best movie to go with your family's (or dog's) Halloween costumes?  As most of us  love to watch the scariest movies, we made a collection of movies and series based on the viewers review to get a spookiest Halloween.DARE OR SCARE!!We offer the all kinds of generes  for ghouls and goblins of all ages..Watch on... if you dare.Are you ready to branch out and explore new sources of terror to fill your heart as well as your home theater?
             Horror will never be the same after you see (and feel) for yourself how intense it is! Make your Halloween a truly horrific night.
             </p>
              </div>
            </div>
          <Footer/>
          </div>
        

        
    )
}

export default About;