import React, { Component } from 'react';
import "./Banner.css";

class Banner extends Component{
    render(){
        return(
<div className="banner-area container-fluid">
<div className="row">
    <div className="banner-text col">
        <div className="banner-heading">
<h2>Lorem Ipsum is simply dummy text of the printing </h2>
</div>
<div className="banner-parag">
<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
</div>
    </div>
    <div className="banner-form col">
        <form className="banner-form">
            <p>Sign up for a free account</p>
            <div className="form-inline">
<input type="text" className="form-control" placeholder="Name" />
<input type="text" className="form-control" placeholder="Surname" />
            </div>
            <div className="form-horizontal">
            <input type="email" className="form-control" placeholder="E-mail" />
<input type="password" className="form-control" placeholder="Password" />    
            </div>
            <div className="register-btn">
                <button className="btn btn-primary" type="submit">
                    Register
                </button>
            </div>
        </form>
    </div>
</div>
</div>
        );
    }
}
export default Banner;