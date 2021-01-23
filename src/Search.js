import React, {useState} from 'react'

import 'react-date-range/dist/styles.css' // main style
import { Button } from "@material-ui/core";
import 'react-date-range/dist/theme/default.css'// theme css file
import { DateRangePicker } from 'react-date-range'
import PeopleIcon from '@material-ui/icons/People'
import './Search.css'

// DateRangePicker componet
function Search() {

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const selectionRange = {
      startDate: startDate,
      endDate: endDate,
      key: 'selection',
    };

   function handleSelect(ranges)  {
     setStartDate(ranges.selection.startDate);
     setEndDate(ranges.selection.endDate);
   }

  return (
    <div className='search'>
      <DateRangePicker ranges={
        [selectionRange]} onChange={handleSelect} />
        <h2>
        Number of Guests
        <PeopleIcon />
        </h2>
        <input min={0} defaultValue={2} type='number' />
        <Button>Search Airbnb</Button>
    </div>
  )
}

export default Search
