import React, {Component} from 'react';
import './../style/App.css';
class Item extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <li>
        <span className="checkbox">
          <input type="checkbox"
                 defaultChecked={this.props.item.isCompleted}
                 onChange={() => {
                   this.props.isComplite(this.props.item)
                 }}/>
        </span>
        <span className="text">
          {this.props.item.title}
          </span>
        <span className="remove"
              onClick={() => {
                this.props.crossClick(this.props.item)
              }}> x
        </span>
      </li>
    );
  }
}


export default Item;

