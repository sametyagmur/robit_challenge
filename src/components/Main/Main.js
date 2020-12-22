import React, { Component } from 'react';
import './Main.css';

class Main extends Component{
render(){
    return(
<div className="main-area container-fluid">
    <h2 className="main-text">Lorem Ipsum <span>Robit</span> is simply dummy text of the printing</h2>
    <div className="main-top row">
        <div className="main-top-left col-lg-6  col-md-6">
<p className="top-header">What is Lorem Ipsum?</p>
<p className="top-parag">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>
        <div className="main-top-right col-lg-6 col-md-6">
        <p className="top-header">Where does it come from?</p>
<p className="top-parag">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>
        <div className="main-top-left col-lg-6 col-md-6">
<p className="top-header">Why do we use it?</p>
<p className="top-parag">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>
        <div className="main-top-right col-lg-6 col-md-6">
<p className="top-header">Where can I get some?</p>
<p className="top-parag">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>
    </div>
    <div className="main-bottom row">
        <div className="col-lg-6 col-md-6">
<h2>Lorem Ipsum is simply dummy text of the <span>Team</span> printing</h2>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
        <div className="bottom-image col-lg-6 col-md-6">
        <img src={process.env.PUBLIC_URL + "/img_team.png"} />
        </div>
    </div>
</div>


    );
}
}

export default Main;