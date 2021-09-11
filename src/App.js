import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Services from './components/Services'
import Footer from  './components/Footer'

const App = () => {

  const [ status, setStatus ] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://api.tfl.gov.uk/line/mode/tube/status')
      setStatus(data)
      console.log(data)
    }
    getData()
    setInterval(getData, 300000) //Updates status every 5 minutes
  }, [])

  return (
    <>
      <body>
        <h1>TfL Tube <br/>Service Info</h1>
        <p className="info"><em>Service statuses are updated every 5 minutes</em></p>
        {/* Services */}
        <Services status={status}/>
        {/* Footer */}
        <Footer/>
      </body>
    </>
  )
}

export default App
