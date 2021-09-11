import React from 'react' 

const Footer = () => {
  return (
    <>
      <div className="links">
        <a className="link" href="https://tfl.gov.uk/travel-information/timetables/" rel="noreferrer" target="_blank">Timetables</a>
        <a className="link" href="https://tfl.gov.uk/tfl/syndication/widgets/tubemap/default-search.html" rel="noreferrer" target="_blank">Tube Map</a>
      </div><div className="bottom">
        <h2 className="made">Made with <span><i className="fas fa-heart fa-sm"></i></span> by Dan</h2>
        <p className="cr">&copy; Dan Laurie 2021</p>
      </div>
    </>
  )
}
export default Footer