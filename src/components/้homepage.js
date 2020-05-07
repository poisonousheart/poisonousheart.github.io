import React from 'react';
import profilepic from '../img/profile.jpg';
import './homepage.css';

function homepage(){
    return(
        <div class="homePage">
            <div>
                <h1 >Hello, World</h1>
            <div><h2>Welcome to my first github page, please enjoy your stay!</h2></div>
            </div>

            <hr />
            <div>
            <h3>My Short Profile</h3>
                <div>I'm Napat Amornsittimehchai (6110402745). I'm currently studying Computer Science at Kasetsart University.
                                            Coding may not be my strongest trait, but I always do my best and give it my all!</div>
                </div>
                <div>I was born on the 10th of May,1999. I'm not a big fan of spicy and bitter foods, though I enjoy eating everything else especially sweets</div>
            <hr />
            <div><h3>Here's a picture of me wearing a giraffe mask and sunglasses.</h3>
            </div>
            <table class="profileArea">
            <img src = {profilepic} className="profilePic"/>
            </table>       
        </div>
    );
}
export default homepage;