import React, { useState, useEffect } from "react";
import jsonData from "./data.json"; // adjust the path as needed

const EditableNode = () => {
  // Assume 1 node for simplicity
  const [originalData] = useState(jsonData); // keep original as read-only
  const [editedData, setEditedData] = useState(
    JSON.parse(JSON.stringify(jsonData))
  );

  // On mount, log initial data
  useEffect(() => {
    console.log("Initial JSON data:", originalData);
  }, [originalData]);

  const node = editedData.nodes[0];

  // Top-level fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({
      ...prev,
      nodes: [
        {
          ...prev.nodes[0],
          [name]: value,
          tool_node: { ...prev.nodes[0].tool_node }, // keep reference correct
        },
      ],
    }));
  };

  // Params (input or output)
  const handleParamChange = (paramType, idx, field, value) => {
    setEditedData((prev) => {
      const newParams = prev.nodes[0].tool_node[paramType].map((param, i) =>
        i === idx ? { ...param, [field]: value } : param
      );
      return {
        ...prev,
        nodes: [
          {
            ...prev.nodes[0],
            tool_node: {
              ...prev.nodes[0].tool_node,
              [paramType]: newParams,
            },
          },
        ],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Initial JSON data:", originalData);
    console.log("Updated JSON data:", editedData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: "2rem auto", padding: 20, border: "1px solid #ccc" }}>
      <h2>Edit Node</h2>
      <div>
        <label>Node Name:</label>
        <input
          name="node_name"
          value={node.node_name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Node Description:</label>
        <input
          name="node_descr"
          value={node.node_descr}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Node Type:</label>
        <input
          name="node_type"
          value={node.node_type}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Tool Type:</label>
        <input
          name="tool_type"
          value={node.tool_node.tool_type}
          onChange={e => {
            const value = e.target.value;
            setEditedData((prev) => ({
              ...prev,
              nodes: [
                {
                  ...prev.nodes[0],
                  tool_node: { ...prev.nodes[0].tool_node, tool_type: value },
                },
              ],
            }));
          }}
        />
      </div>
      <div>
        <label>Tool Name:</label>
        <input
          name="tool_name"
          value={node.tool_node.tool_name}
          onChange={e => {
            const value = e.target.value;
            setEditedData((prev) => ({
              ...prev,
              nodes: [
                {
                  ...prev.nodes[0],
                  tool_node: { ...prev.nodes[0].tool_node, tool_name: value },
                },
              ],
            }));
          }}
        />
      </div>

      <hr />
      <h3>Input Params:</h3>
      {node.tool_node.input_params.map((param, idx) => (
        <div key={idx} style={{ marginBottom: 10 }}>
          <input
            value={param.param_name}
            onChange={e => handleParamChange("input_params", idx, "param_name", e.target.value)}
            placeholder="Param Name"
          />
          <input
            value={param.param_datatype}
            onChange={e => handleParamChange("input_params", idx, "param_datatype", e.target.value)}
            placeholder="Param Datatype"
          />
          <input
            value={param.param_value}
            onChange={e => handleParamChange("input_params", idx, "param_value", e.target.value)}
            placeholder="Param Value"
          />
        </div>
      ))}

      <h3>Output Params:</h3>
      {node.tool_node.output_params.map((param, idx) => (
        <div key={idx} style={{ marginBottom: 10 }}>
          <input
            value={param.param_name}
            onChange={e => handleParamChange("output_params", idx, "param_name", e.target.value)}
            placeholder="Param Name"
          />
          <input
            value={param.param_datatype}
            onChange={e => handleParamChange("output_params", idx, "param_datatype", e.target.value)}
            placeholder="Param Datatype"
          />
          <input
            value={param.param_value}
            onChange={e => handleParamChange("output_params", idx, "param_value", e.target.value)}
            placeholder="Param Value"
          />
        </div>
      ))}
      <button type="submit">Update JSON</button>
    </form>
  );
};

export default EditableNode;
