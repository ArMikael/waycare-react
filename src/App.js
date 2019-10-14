import React, { useState } from 'react';
import './App.css';
import ImageList from './components/ImageList/ImageList';
import ImageView from "./components/ImageView/ImageView";
import { connect } from 'react-redux';

function App() {
    const selectedImage = {
        author: "Roberto Nickson",
        download_url: "https://picsum.photos/id/1011/5472/3648",
        height: 3648,
        id: "1011",
        url: "https://unsplash.com/photos/7BjmDICVloE",
        width: 5472
    };

    // const [selectedImage, setSelectedImage] = useState(null);

    // store.subscribe(() => {
    //     setSelectedImage(store.getState().selectedImage)
    // });

  return (
    <div className="waycare-app">
        <ImageList />
        <ImageView selectedImage={ selectedImage }/>
    </div>
  );
}

const mapStateToProps = state => {
    return {
        selectedImage: state.selectedImage
    }
};

export default connect(mapStateToProps, null)(App);
// export default App;
