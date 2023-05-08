// import React from React Library
import React from 'react';
// import useState from React
import { useState } from 'react';

// define a function that is our component, declare props parameter
const GiphyForm = (props) => {
    // state to hold the data from form
    const [formData, setFormData] = useState({searchTerm: "", name: ""});
    
    // handleChange - updates formData when typing into form
    const handleChange = (e) => {
        // use the event object to detect key and value to update
        // spread the previous object, THEN update specific key:value
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        // prevent page from refreshing on submission
        e.preventDefault();
        // pass the search term to giphysearch prop, App's getGiphy function
        props.giphySearch(formData.searchTerm);
    };

    // return some JSX
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="searchTerm"
                onChange={handleChange}
                value={formData.searchTerm} 
            />
            <input type="submit" value="submit" />
        </form>
    )
};

// export component to use in other files
export default GiphyForm;