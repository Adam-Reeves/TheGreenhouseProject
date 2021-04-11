import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import styles from '../styles/Grid.module.css';
import {useEffect, useState} from 'react';

async function retrieveImages(limit: number, offset: number) {
  const response = await fetch(`http://127.0.0.1:3000/api/v1/image?limit=${limit}&offset=${offset}`)
  const json = await response.json()
  return json
}

export default function PictureDisplay() {
  const limit = 3
  const [offset, setOffset] = useState(0)
  const [images, setImages] = useState([])

  const increaseOffset = () => {
    setOffset(offset + limit)
  }

  useEffect(() => {
    try {
      const getImages = async () => {
        const json = await retrieveImages(limit, offset)
        // @ts-ignore
        setImages([...images, ...json.images])
      }
      getImages()
      console.log(images)
    } catch(e) {
      console.log(e)
    }
  }, [offset])

  return (
    <div className={styles.root}>
      <Grid container spacing={3}>
        
            {images.length > 0 ?
            images.map(img => {
              return (
              <Grid className={styles.gridItem} item xs={4}>
                <Paper className={styles.paper}>
                <img className={styles.image} src={`data:image/jpeg;base64,${img}`} />
                </Paper>
              </Grid>
              )
          }) : <></>
          }
          <Grid onClick={() => increaseOffset()} className={styles.gridItem} item xs={12}><p>Load more...</p></Grid>
      </Grid>
    </div>
  );
}
