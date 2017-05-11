import        {connect}     from 'react-redux';
import        Todo from './../components/Todo';

const mapStateToProps = (state) => {
  return {
    list: state.Todos.list,
  };
};

export default connect(mapStateToProps)(Todo);