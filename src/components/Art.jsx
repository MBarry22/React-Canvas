import { Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import EditArt from './EditArt'

function Art() {
  const [artwork, setArtwork] = useState([])
  const { path, url } = useRouteMatch()

  useEffect(() => {
    const savedArtwork = localStorage.getItem('artwork') || ''
    const artworkArray = savedArtwork.split(',')
    setArtwork(artworkArray.filter(Boolean))
  }, [])

  const handleDeleteArtwork = (index) => {
    const newArtwork = [...artwork]
    newArtwork.splice(index, 1)
    const updatedArtwork = newArtwork.join(',')
    localStorage.setItem('artwork', updatedArtwork)
    setArtwork(newArtwork)
  }

  return (
    <div className="App">
      <Switch>
        <Route path={`${path}/edit/:index`}>
          <EditArt artwork={artwork} setArtwork={setArtwork} />
        </Route>
        <Route path={path}>
          {artwork.map((dataUrl, index) => (
            <div key={index}>
              <img src={`data:image/png;base64,${dataUrl}`} alt={`Artwork ${index}`} />
              <button onClick={() => handleDeleteArtwork(index)}>Delete</button>
              <Link to={`${url}/edit/${index}`}>Edit</Link>
            </div>
          ))}
        </Route>
      </Switch>
    </div>
  )
}

export default Art;
