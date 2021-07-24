import React, { useState, useEffect } from "react";
import { BookContext } from "../contexts/bookContext";
import { useContext } from "react";
import axios from "axios";

function Dropdown() {
  const [levels, setLevels] = useState([]);
  const { selectedLevel, setselectedLevel } = useContext(BookContext);

  useEffect(() => {
    axios({
      url: "https://api-dev.lelivrescolaire.fr/graphql",
      method: "post",
      data: {
        query: `
        {
        viewer {
          levels {
          name 
          id 
          order
        }
      }
    }`,
      },
    }).then((result) => {
      setLevels(result.data.data.viewer.levels);
    });
    console.log(levels);
  }, []);

  const handleLevelChange = (event) => {
    event.preventDefault();
    setselectedLevel(event.target.value);
  };

  console.log(selectedLevel);

  return (
    <>
      <div className='select'>
        <select name='level' id='level' onChange={handleLevelChange}>
          <option key='All' value='All'>
            All
          </option>
          {levels.map((level) => (
            <option key={level.id} value={level.id}>
              {level.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default Dropdown;
