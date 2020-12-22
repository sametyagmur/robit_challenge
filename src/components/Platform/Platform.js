import React, { Component } from 'react';
import './Platform.css';

class Platform extends Component{
    render(){
        return(
<div className="platform-area container">
<h2 className="platform-heading">Robit Platform standard chunk of lorem ipsum?</h2>
<p className="platform-parag">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
<div className="row">
    <div className="card-area col-lg-4">
    <div className="card">
            <img src={process.env.PUBLIC_URL + "/img_platform_01.png"} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">Lorem Ipsum</h5>
                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>
            </div>
            </div>
    </div>
    <div className="col-lg-4">
    <div className="card">
    <img src={process.env.PUBLIC_URL + "/img_platform_02.png"} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">Lorem Ipsum</h5>
                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>
            </div>
            </div>
    </div>
    <div className="col-lg-4">
        <div className="card">
        <img src={process.env.PUBLIC_URL + "/img_platform_03.png"} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">Lorem Ipsum</h5>
                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>
            </div>
        </div>
    </div>
</div>
</div>
        );
    }
}
export default Platform