import React from 'react' 

const Services = ({ status }) => {
  return (
    <div className="container">
      {status.map((stats, i) => {
        return (
          <div key={i} className="status">
            <h2 className={stats.name.toLowerCase()}>{stats.name}</h2>
            <h3>{stats.lineStatuses[0].statusSeverityDescription}</h3>
          </div>
        )
      })}
    </div>
  )
}
export default Services