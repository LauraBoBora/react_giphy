// import React from React Library
import React from 'react';

// define a function that is our component and declare props
const GiphyDisplay = ({ giphy }) => {
    // function to return loaded JSX
    const loaded = () => {
        return (
            <div>
                <img src={giphy.images.original.url} alt={giphy.alt_text} />
                <h2>{giphy.title}</h2>
            </div>
        )
    }

    // function to return loading JSX
    const loading = () => {
        return (
            <div>
                <h2>No Giphy To Display</h2>
            </div>
        )
    };

    // ternary operator to determine which functions JSX runs
    return giphy ? loaded() : loading();
};

// export component to use in other files
export default GiphyDisplay;