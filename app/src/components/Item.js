import React, {Component,PropTypes} from 'react';
import './../style/App.css';
class Item extends Component {
  constructor(props) {

    super(props);
    console.log('>>>>>> 3');
  };


  render() {
    console.log('from TODOCONMPONENT',this.props)
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
          <span> -  <i>{this.props.item.translatedWord ? this.props.item.translatedWord : ''} </i></span>
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

Item.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.object
  ]),
  crossClick : PropTypes.func,
  isComplite : PropTypes.func,
};

export default Item;

