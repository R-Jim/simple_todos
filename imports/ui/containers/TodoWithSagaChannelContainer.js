import { connect } from 'react-redux';
import TodoWithSagaChannel from '../components/TodoWithSagaChannel';
import { fetchStart } from '../reducers/Todos';

const mapStateToProps = ({ todos: { list } }) => {
  return {
    list
  };
}

const mapDispatchToProps = ({
  fetchData: fetchStart,
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoWithSagaChannel);