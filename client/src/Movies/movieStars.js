import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { useParams } from 'react-router-dom';


 const MovieStars = (props) => {
    const [item, setItem] = useState()

    const handleChange = e => {
        setItem({...item,[e.target.name]: e.target.value});
      };
    
      console.log('this is movieStars', props)
     console.log(item)
    return (
       <div>
          {props.item.map(star =>
          <input
            type="text"
            name="stars"
            placeholder={star}
            onChange={handleChange}
            value={props.item.stars}
          />
          )}
      </div>
  
    );
}

export default MovieStars