import React from 'react';
import './ImageView.css';

const ImageView = (props) => {
    return (
        <section className="image-container">
            {
                props.selectedImage &&
                <div className="image-view">
                    <div className="image-metadata">
                        <span>Author: { props.selectedImage.author }, </span>
                        <span>Id: { props.selectedImage.id }, </span>
                        <span>Width: { props.selectedImage.width }, </span>
                        <span>Height: { props.selectedImage.height } </span>
                    </div>

                    <div className="image-view-wrapper">
                        <div className="image-view-card">
                            <img src={ props.selectedImage.download_url } className="image-view-image" />
                        </div>
                    </div>
                </div>
            }
        </section>
    );
};

export default ImageView;