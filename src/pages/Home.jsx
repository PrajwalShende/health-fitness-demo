import React, {useState} from 'react'
import {Box} from '@mui/material'
import Excercises from '../components/Excercises'
import SearchExcercises from '../components/SearchExcercises'
import HeroBanner from '../components/HeroBanner'

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  console.log(bodyPart);
  return (
    <Box>
      <HeroBanner />
      <SearchExcercises setExercises={setExercises}
      bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      
      <Excercises excercises={exercises} 
      setExercises={setExercises}
      bodyPart={bodyPart} />
    </Box>
  )
}

export default Home