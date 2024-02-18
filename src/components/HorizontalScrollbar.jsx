import React, {useContext} from 'react'
import {Box, Typography} from '@mui/material'
import BodyPart from './BodyPart'
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu'
import 'react-horizontal-scrolling-menu/dist/styles.css';
import ExerciseCard from './ExerciseCard';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow"> {/* Corrected class name */}
      <ArrowBackIosIcon/> {/* Corrected alt attribute */}
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow"> {/* Corrected class name */}
      <ArrowForwardIosIcon/> {/* Corrected alt attribute */}
    </Typography>
  );
};

export { LeftArrow, RightArrow };


const HorizontalScrollbar = ({data, bodyPart, setBodyPart, isBodyParts }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
      <Box 
      key={item.id || item}
      itemID={item.id || item}
      title={item.id || item}
      m="0 40px"
      >
       { isBodyParts ? <BodyPart item={item} bodyPart= {bodyPart} setBodyPart={setBodyPart} />
       :<ExerciseCard exercise={item}/>}
      </Box>
      )
      )}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar