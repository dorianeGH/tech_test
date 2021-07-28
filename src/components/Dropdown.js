import React, { useState, useEffect, useCallback } from "react"
import { BookContext } from "../contexts/bookContext"
import { useContext } from "react"
import axios from "axios"

function Dropdown() {
  const [levels, setLevels] = useState([])
  const { selectedLevel, setSelectedLevel } = useContext(BookContext)

  const init = useCallback(async () => {
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
    }).then(result => {
      setLevels(result?.data?.data?.viewer?.levels)
    })
    console.log(levels)
    // TODO: This line shows a warning about non-including the levels in the dependencies. How do you get rid of it?
  }, [])

  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    init()
  }, [init])

  const handleLevelChange = event => {
    event.preventDefault()
    setSelectedLevel(event.target.value)
  }

  console.log(selectedLevel)

  return (
    <>
      <div className="select">
        <select name="level" id="level" onChange={handleLevelChange}>
          <option key="All" value="All">
            All
          </option>
          {levels.map(level => (
            <option key={level.id} value={level.name}>
              {level.name}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

export default Dropdown
