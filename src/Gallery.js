/**
 * Created by conalmclaughlin on 03/01/2017.
 */
import React, { Component } from 'react';
import {PhotoSwipe} from 'react-photoswipe';
import {PhotoSwipeGallery} from 'react-photoswipe';
import 'react-photoswipe/lib/photoswipe.css';
import diver_1 from './images/gallery/diver_1.jpg';
import diver_2 from './images/gallery/diver_2.jpg';
import diver_3 from './images/gallery/diver_3.jpg';
import diver_4 from './images/gallery/diver_4.jpg';
import cave_1 from './images/gallery/cave_1.jpg';

const $ = require('jquery');

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            items: [
                {
                    src: diver_1,
                    w: 600,
                    h: 400
                },
                {
                    src: diver_2,
                    w: 1200,
                    h: 900
                },
                {
                    src: diver_3,
                    w: 1200,
                    h: 900
                },
                {
                    src: diver_4,
                    w: 1200,
                    h: 900
                },
                {
                    src: cave_1,
                    w: 1200,
                    h: 900
                }
            ],
            galleryItems: [
                {
                    src: 'http://lorempixel.com/1200/900/nightlife/1',
                    thumbnail: 'http://lorempixel.com/120/90/nightlife/1',
                    w: 1200,
                    h: 900,
                    title: 'Image 1'
                },
                {
                    src: 'http://lorempixel.com/1200/900/nightlife/2',
                    thumbnail: 'http://lorempixel.com/120/90/nightlife/2',
                    w: 1200,
                    h: 900,
                    title: 'Image 2'
                },
                {
                    src: 'http://lorempixel.com/1200/900/nightlife/3',
                    thumbnail: 'http://lorempixel.com/120/90/nightlife/3',
                    w: 1200,
                    h: 900,
                    title: 'Image 3'
                },
                {
                    src: 'http://lorempixel.com/1200/900/nightlife/4',
                    thumbnail: 'http://lorempixel.com/120/90/nightlife/4',
                    w: 1200,
                    h: 900,
                    title: 'Image 4'
                }
            ],
            options: {
                index: 0
            }
        }
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
                <h2>PhotoSwipe</h2>
                <hr/>
                <button className='btn btn-primary' onClick={this.openPhotoSwipe}>
                    Click me
                </button>
                <PhotoSwipe isOpen={this.state.isOpen} items={this.state.items}
                            options={this.state.options}
                            onClose={this.handleClose}/>
                <hr/>
                <h2>PhotoSwipeGallery</h2>
                <hr/>
                <PhotoSwipeGallery items={this.state.galleryItems}
                                   thumbnailContent={this.getThumbnailContent}/>
            </div>
        )
    }
}

export default Gallery;