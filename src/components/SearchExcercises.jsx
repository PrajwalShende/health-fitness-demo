import React, {useEffect, useState} from 'react'
import { Box, Button, Stack, TextField, Typography} from '@mui/material'
import { excerciseOptions, fetchData } from '../utlis/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'


const SearchExcercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState(" ");
  
  const [bodyParts,setBodyParts] = useState([]);

  useEffect(()=> {
    const fetchExcercisesData = async() => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', excerciseOptions);
      
      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExcercisesData();
  }, [])

  const handleSearch = async() => {
    if(search) {
      const exercisesData  = await fetchData
      ('https://exercisedb.p.rapidapi.com/exercises', excerciseOptions);

      const searchedExercises = exercisesData.filter(
        (exercise) => 
          exercise.name.toLowerCase().includes(search) 
          || exercise.target.toLowerCase().includes(search) 
          || exercise.equipment.toLowerCase().includes(search)  // Corrected method name
          ||exercise.bodyPart.toLowerCase().includes(search),
      );
      
      setSearch('');
      setExercises(searchedExercises);
    }
  };
  
  
  return (
    <Stack alignItems="center" mt="37px"
    justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{fontSize: {lg: '44px', xs: '30px'}}}
      mb="50px" textAlign="center">Exercises You <br /> should Know</Typography>
      <Box position="relative" mb="72px">
        <TextField
        placeholder="Search for Exercises"
        sx={{
          input: { fontWeight: "700",
        border:'none', borderRadius: "6px"}, width: {lg: "800px", xs:"350px"}, 
        backgroundColor: "#fff", borderRadius: "20px"
        }}
        height="76px"
        value={search}
        onChange={(e)=> setSearch(e.target.value.toLowerCase())} 
        type="text"
        />
      <Button className="search-btn"
        sx={{
          bgcolor: "#FF2625", 
          color: "#fff",
          textTransform: "none",
          width: {lg: "175px", xs: "80px"},
          fontSize: {lg: "20px", xs: "14px"},
          height: "56px",
          position: "absolute",
          right: "0"
        }}
        onClick={handleSearch}
      >
        Search
      </Button>
      </Box>
        <Box sx={{position: 'relative', width: '100%', p: '20px'}}>
          <HorizontalScrollbar data={bodyParts}
          bodyPart = {bodyPart} setBodyPart = {setBodyPart} isBodyParts
          />
        </Box>
    </Stack>
  )
}

export default SearchExcercises