import { Container } from 'react-container-component';
import        {connect}     from 'react-redux';
import        Item from './../components/Item';
import * as Action from './../actions/Creators'


let dispatch;

class ItemContainer extends Container {
  constructor() {
    super();
    this.setComponent(Item);
  }

  componentDidMount() {
    console.log('component ready ...');
    dispatch(Action.requestTranslatedWord(this.props.item));
  };
}


const mapStateToProps = () => ({

});

const mapDispatchToProps = (d) => {
  dispatch = action => d(action);
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemContainer)
