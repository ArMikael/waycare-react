import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Sidebar = () => {
    const [imageList, setImageList] = useState([]);

    useEffect(() => {
        // thumbnailWidth = 285;
        // thumbnailHeight = 100;

        axios.get('https://picsum.photos/v2/list?limit=20')
            .then((response) => {
                setImageList(response.data);
                console.log(response.data);
            });
    }, []);

    return (
        <aside className="sidebar">
            <ul className="image-list">
                {
                    imageList.map(image => <li key={image.id} className="image-list-item">
                                                {image.id}
                                           </li>)
                }
            </ul>
        </aside>
    );
};

export default Sidebar;