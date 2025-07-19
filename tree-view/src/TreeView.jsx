import React, { useState } from 'react';

function TreeView({ node }) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = node.type === 'folder' && node.children && node.children.length > 0;

  function toggleExpand() {
    setExpanded((prev) => !prev);
  }

  return (
    <div className="treeview" style={{ marginLeft: '20px' }}>
      <div onClick={toggleExpand} style={{ cursor: hasChildren ? 'pointer' : 'default' }}>
        {node.type === 'folder' ? (
          <span>{expanded ? '📂' : '📁'} {node.name}</span>
        ) : (
          <span>📄 {node.name}</span>
        )}
      </div>

      {hasChildren && expanded && (
        <div>
          {node.children.map((child) => (
            <TreeView key={child.path} node={child} /> 
          ))}
        </div>
      )}
    </div>
  );
}

export default TreeView;
