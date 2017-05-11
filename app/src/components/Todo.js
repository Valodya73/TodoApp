import React, {Component} from 'react';
import Item from './Item';
import * as Action from './../actions/Creators'
import './../style/App.css';
let ID = 0;
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list,
    };
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      list: nextProps.list,
    });
  };

  addItem(event) {
    if (event.key === 'Enter') {
      this.props.dispatch(Action.addTodoItem(event.target.value, ID++));
      event.target.value = '';
    }
  };

  removeItem(item) {
    this.props.dispatch(Action.removeItem(item));
  };

  compliteItem(item) {
    item.isCompleted = !item.isCompleted;
    this.props.dispatch(Action.compliteItem(item));
    this.setState({
      list: this.props.list,
    })
  }


  render() {
    return (
      <div className="container">
        <input type="text" placeholder="todo text" onKeyUp={(e) => this.addItem(e)}/>
        <div className="info">
          <span style={{float: 'left'}}>
            <span  className="count-text">completed count</span>
            {this.state.list.filter((item) => {
              return item.isCompleted;
            }).length}
          </span>

          <span style={{float: 'right'}}>
            <span className="count-text"> items count</span>
            {this.state.list.filter((item) => {
              return item;
            }).length}
          </span>
        </div>
        <div className="repeat-components ">
          <ul>
            {this.state.list.map((item) => {
              return <Item item={item}
                           crossClick={(item) => {
                             this.removeItem(item);
                           }}
                           isComplite={(item) => {
                             this.compliteItem(item);
                           }}/>
            })}
          </ul>
        </div>
      </div>
    )
  }
}


export default Todo;
