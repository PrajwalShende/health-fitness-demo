import React, {useEffect, useState} from 'react'
import {Pagination} from '@mui/material'
import {Box, Stack, Typography} from '@mui/material'
import { excerciseOptions, fetchData } from '../utlis/fetchData'
import ExerciseCard from './ExerciseCard'

const Excercises = ({excercises, setExercises, bodyPart}) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 3;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = excercises.slice
  (indexOfFirstExercise, indexOfLastExercise);

  const paginate =(e, value)=> {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth"})
  }

  useEffect(() => {
    const fetchExcercisesData =async () => {
      let exercisesData = [];

      if(bodyPart === 'all') {
        exercisesData =  await fetchData
        ('https://exercisedb.p.rapidapi.com/exercises', excerciseOptions);
      } else {
        exercisesData = await fetchData
        (`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, excerciseOptions);
      }

      setExercises(exercisesData);
    }

    fetchExcercisesData();
  }, [bodyPart]);
  return (
    <Box id="exercises"
    sx={{mt: {lg: '110px'}}}
    mt = "50px" p="20px"
    >
      <Typography variant='h3' mb="46px">
        Showing Results
      </Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} 
      flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, index)=> (
         <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
          {excercises.length > 3 && (
            <Pagination 
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(excercises.length /exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'
            />
          )}
      </Stack>
    </Box>
  )
}

export default Excercises