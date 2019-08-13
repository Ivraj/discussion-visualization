import React from 'react';
import { Graph } from 'react-d3-graph';
import { Button } from 'react-bootstrap';
import styles from './DiscussionGraph.module.scss';

class DiscussionGraph extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();

    this.state = {
      nodes: [{ id: 'Harry' }, { id: 'Sally' }, { id: 'Alice' }],
      links: [
        { source: 'Harry', target: 'Sally' },
        { source: 'Harry', target: 'Alice' },
      ],
    };

    this.onClickNode = this.onClickNode.bind(this);
    this.onRightClickNode = this.onRightClickNode.bind(this);
    this.addParticipant = this.addParticipant.bind(this);
  }

  componentDidMount() {
    this.canvas.current.addEventListener('contextmenu', function(event) {
      event.preventDefault();
      return false;
    });
  }

  onClickNode = function(nodeId) {
    window.alert(`Clicked node ${nodeId}`);
  };

  onRightClickNode = function(event, nodeId) {
    window.alert(`Right clicked node ${nodeId}`);
  };

  addParticipant = () => {
    this.setState(state => {
      nodes: state.nodes.push({ id: 'New', cx: 50, cy: 50 });
    }, console.log(this.state.nodes));
  };

  render() {
    const data = { nodes: this.state.nodes, links: this.state.links };

    const myConfig = {
      height: 800,
      node: {
        fontSize: 18,
        color: 'lightgreen',
        size: 1000,
      },
      link: {
        highlightColor: 'lightblue',
        type: 'CURVE_SMOOTH',
      },
    };

    return (
      <div className={styles.DiscussionGraph}>
        <div className={styles.DiscussionGraph__canvas} ref={this.canvas}>
          <Graph
            id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
            data={data}
            config={myConfig}
            onClickNode={this.onClickNode}
            onRightClickNode={this.onRightClickNode}
          />
        </div>
        <div className={styles.DiscussionGraph__controlPanel}>
          <Button onClick={this.addParticipant}>Add participant</Button>
        </div>
      </div>
    );
  }
}

export default DiscussionGraph;
