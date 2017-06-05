/**
 * Created by conalmclaughlin on 03/01/2017.
 */
import React, { Component } from 'react';
import {PhotoSwipe} from 'react-photoswipe';
import {PhotoSwipeGallery} from 'react-photoswipe';
import 'react-photoswipe/lib/photoswipe.css';
import camera_icon from './images/diving-icons-svg/svg/camera.svg';

const $ = require('jquery');

class PhotoswipeInst extends Component {
    constructor(props) {
        super(props);
        this.state = props.album ;
    }


    componentDidMount() {
    }

    handleClose = () => {
        this.setState({
            isOpen: false
        });
    };

    openPhotoSwipe = (e) => {
        e.preventDefault();
        this.setState({
            isOpen: true,
            options: {
                closeOnScroll: false
            }
        });
    };

    render() {
        return (
            <div className="gallery-content container-fluid">

                <div className="gallery-icon-container">
                    <img src={camera_icon} alt="gallery" className="gallery-icon" onClick={this.openPhotoSwipe}/>
                </div>


                <PhotoSwipe isOpen={this.state.isOpen} items={this.state.items}
                            options={this.state.options}
                            onClose={this.handleClose}/>
                {/*<hr/>
                 <h2>PhotoSwipeGallery</h2>
                 <hr/>
                 <PhotoSwipeGallery items={this.state.galleryItems}
                 thumbnailContent={this.getThumbnailContent}/>*/}
            </div>
        )
    }
}

export default PhotoswipeInst;
