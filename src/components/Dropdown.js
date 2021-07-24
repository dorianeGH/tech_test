import React, { useState, useEffect } from "react";
import axios from "axios";

function Dropdown() {
  const [levels, setLevels] = useState([]);

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

  return (
    <>
      <div className='select'>
        <select
          name='level'
          id='level'
          value={levels}
          onChange={(event) => {
            setLevels(event.target.value);
          }}
        >
          Level
          <option key='None' value={0}>
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
