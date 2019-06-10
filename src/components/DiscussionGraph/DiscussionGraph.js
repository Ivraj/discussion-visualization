import React from 'react';
import { Graph } from 'react-d3-graph';

import styles from './DiscussionGraph.module.scss';

const data = {
  nodes: [{ id: 'Harry', fontSize: 14 }, { id: 'Sally' }, { id: 'Alice' }],
  links: [
    { source: 'Harry', target: 'Sally' },
    { source: 'Harry', target: 'Alice' },
  ],
};

const myConfig = {
  height: 800,
  node: {
    fontSize: 18,
    color: 'lightgreen',
    size: 1000,
  },
  link: {
    highlightColor: 'lightblue',
  },
};

const onClickNode = function(nodeId) {
  window.alert(`Clicked node ${nodeId}`);
};

const onRightClickNode = function(event, nodeId) {
  window.alert(`Right clicked node ${nodeId}`);
};

const onClickLink = function(source, target) {
  window.alert(`Clicked link between ${source} and ${target}`);
};

const onRightClickLink = function(event, source, target) {
  window.alert(`Right clicked link between ${source} and ${target}`);
};

class DiscussionGraph extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  componentDidMount() {
    this.canvas.current.addEventListener('contextmenu', function(event) {
      event.preventDefault();
      return false;
    });
  }
  render() {
    return (
      <div ref={this.canvas}>
        <Graph
          id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
          data={data}
          config={myConfig}
          onClickNode={onClickNode}
          onRightClickNode={onRightClickNode}
          onClickLink={onClickLink}
          onRightClickLink={onRightClickLink}
        />
      </div>
    );
  }
}

export default DiscussionGraph;
