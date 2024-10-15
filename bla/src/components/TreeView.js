// src/components/TreeView.js
import React, { useState } from "react";

const TreeView = ({ data, onSelectItem }) => {
  const [expanded, setExpanded] = useState({});

  // Function to handle expanding or collapsing a location
  const toggleExpand = (id) => {
    setExpanded((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  // Recursive function to render a location and its children
  const renderTree = (node, level = 0) => {
    return (
      <div key={node.id}>
        <div
          className="tree-item tree-item-parent"
          style={{ marginLeft: level * 20 }} // Indent based on level
          onClick={() => toggleExpand(node.id)}
        >
          {node.children && node.children.length > 0 && (
            <span className="toggle-icon">
              {expanded[node.id] ? "▼" : "▶"}
            </span>
          )}
          {!node.children || node.children.length === 0 ? (
            <span className="toggle-icon">▶</span> // Arrow for locations without children
          ) : null}

          {/* Folder emoji for locations */}
          <span role="img" aria-label="Folder" style={{ marginRight: 8 }}>
            📁
          </span>
          <span className="location-name">{node.name}</span>
        </div>

        {/* Render children if expanded */}
        {expanded[node.id] && (
          <>
            {node.children &&
              node.children.map((child) => (
                <div className="tree-item" key={child.id}>
                  {renderTree(child, level + 1)}
                </div>
              ))}
            {/* Render items directly under this location */}
            {node.items &&
              node.items.map((item) => (
                <div
                  className="tree-item tree-item-child"
                  style={{ marginLeft: (level + 1) * 20 }} // Indent items further
                  key={item.item_id}
                  onClick={() => onSelectItem(item)}
                >
                  {/* Image emoji for items */}
                  {/* <span role="img" aria-label="Image" style={{ marginRight: 8 }}>
                    🖼️
                  </span> */}
                  {item.name}
                </div>
              ))}
          </>
        )}
      </div>
    );
  };

  return (
    <div>
      <h3>Locations</h3>
      {data.locations.length > 0 ? (
        data.locations.map((location) => renderTree(location))
      ) : (
        <p>No locations available</p>
      )}
    </div>
  );
};

export default TreeView;
