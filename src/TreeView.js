import React from "react";
import Tree from 'react-d3-tree';
import { tree } from "d3";
import "./TreeView.css"

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const orgChart = {
  name: 'CEO',
  children: [
    {
      name: 'Manager',
      attributes: {
        department: 'Production',
      },
      children: [
        {
          name: 'Foreman',
          attributes: {
            department: 'Fabrication',
          },
          children: [
            {
              name: 'Worker',
            },
          ],
        },
        {
          name: 'Foreman',
          attributes: {
            department: 'Assembly',
          },
          children: [
            {
              name: 'Worker',
            },
          ],
        },
      ],
    },
  ],
};

const treejson2 = {
  name: "root",
  x: 5,
  children: [
    {
      name: "WikiBox",
    },
    {
      name: "retrosenator",
    },
    {
      name: "jsudarskyvt",
    },
  ],
};

export function TreeView() {
  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div id="treeWrapper" style={{ width: '50em', height: '20em' }}>
      <Tree data={treejson2} />
    </div>
  );
}