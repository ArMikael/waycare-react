import React from 'react';
import './App.css';
import ImageList from './components/ImageList/ImageList';
import ImageView from "./components/ImageView/ImageView";

function App() {
    const selectedImage = {
        author: "Alejandro Escamilla",
        download_url: "https://picsum.photos/id/0/5616/3744",
        height: 3744,
        id: "0",
        url: "https://unsplash.com/photos/yC-Yzbqy7PY",
        width: 5616
    };

  return (
    <div className="waycare-app">
        <ImageList />
        <ImageView selectedImage={ selectedImage }/>
    </div>
  );
}

export default App;
