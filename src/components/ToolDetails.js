import React, { useState } from 'react';
import tooldata from './tooldata.json';

const ToolDetails = () => {
  const [nodeData, setNodeData] = useState(tooldata.nodes);

  const handleNNameChange = (e, nodeId) => {
    const updatedNName = e.target.value;

    const updatedNodes = nodeData.map((node) =>
      node.nodeid === nodeId ? { ...node, node_name: updatedNName } : node
    );

    setNodeData(updatedNodes);
  };

  const handleSubmit = () => {
    console.log('Updated Node Data:', nodeData);
    alert('Node data submitted!');
  };

  return (
    <div className="tooldetails-section">
      <div className="tooldetails-container">
        <h1>Tool Details</h1>
        {nodeData.map((item) => (
          <div className="tools" key={item.nodeid}>
            <div className="nodename">
              <label>Node Name:</label>
              <input
                type="text"
                value={item.node_name}
                onChange={(e) => handleNNameChange(e, item.nodeid)}
              />
            </div>
          </div>
        ))}
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default ToolDetails;
