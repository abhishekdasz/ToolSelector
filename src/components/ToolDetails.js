import React, { useState } from 'react'
import tooldata from './tooldata.json'

const ToolDetails = () => {
  const [nodeData,setNodeData] = useState(tooldata.nodes);
  const handleChange = () =>{

  }
  const handleSubmit = () =>{
    
  }
  return (
    <div className='tooldetails-section'>
        <div className="tooldetails-container">
          <h1> Tool Detailssssss </h1>
          {
            nodeData.map((item)=>(
              <div className="tools" key={item.nodeid}>
                <div className="nodename">
                  <label> NodeName: </label>
                  <input type="text" value={item.node_name} onChange={handleChange} />
                </div>
                <button onClick={handleSubmit}> Submit </button>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default ToolDetails