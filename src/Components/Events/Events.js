import Aar from "../Events/Aar/Aar.js"
import Dnd from "../Events/Dnd/Dnd.js"
import Fist from "../Events/Fist/Fist.js"
import Header from "../Events/Header/Header.js"
import Sdv from "../Events/Sdv/Sdv.js"
import TedxSec from "../Events/TedxSec/TedxSec.js"
import React from 'react'

const Events = () => {
  return (
    <div>
      <Header/>
      <Aar/>
      <Fist/>
      <Dnd/>
      <Sdv/>
      <TedxSec/>

    </div>
  )
}

export default Events
