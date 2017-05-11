import { Container } from 'react-container-component';
import        {connect}     from 'react-redux';
import        Item from './../components/Item';
import * as Action from './../actions/Creators'
const YandexTranslator = require('yandex.translate');
const API_KEY = 'trnsl.1.1.20170511T134210Z.ba13a5c816af7d43.07eedaff1ac2ccdd1b9d87c9102b2672097cb14b';
const translator = new YandexTranslator(API_KEY);
const lng = 'ru';

let dispatch;

class ItemContainer extends Container {
  constructor(){
    super();
    this.setComponent(Item);
  }

  componentDidMount() {
    translator
      .translate(this.props.item.title, lng)
      .then((result) => {
        dispatch(Action.addTranslatedWord(result[0], this.props.item.title));
      })
      .catch((err) => {
        dispatch(Action.addTranslatedWord('N/A', this.props.item.title));
      });
  }
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











//
// export default connect(mapStateToProps)(Item);
