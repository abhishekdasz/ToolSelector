import React, { useState } from 'react'
import tooldata from './tooldata.json'

const ToolDetails = () => {
  const [nodeData,setNodeData] = useState(tooldata.nodes);
  const [updatedNodeData, setUpdatedNodeData] = useState();
  
  const handleNNameChange = (e) =>{
    const updatedNName = e.target.value;
    setUpdatedNodeData = nodeData.map((node)=> {node.node_name=updatedNName})
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
                  <input type="text" value={item.node_name} onChange={handleNNameChange} />
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