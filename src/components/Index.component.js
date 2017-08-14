import React from 'react';
import { connect } from 'react-redux';
import { getDetail, saveDetails, getGit } from '../actions/detailAction';

const Detail = ({detail}) => {
  return (
    <tr>
      <td>{detail.id}</td>
      <td><img src={detail.avatar_url}/> </td>
      <td>{detail.login}</td>
    </tr>
  );
};

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      username: '',
      password: ''
    }

    this.changeSomething = this.changeSomething.bind(this);
  }

  changeSomething(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  componentDidMount() {
    this.props.getGit();
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" name="id" onChange={this.changeSomething} />
          <input type="text" name="username" onChange={this.changeSomething} />
          <input type="text" name="age" onChange={this.changeSomething} />
          <input type="submit" />
        </div>
        <table>
          <tr>
            <th>id</th>
            <th>username</th>
            <th>Age</th>
          </tr>
          {this.props.details.map((data) => {
            return <Detail key={data.id} detail={data} />;
          })}
        </table>
      </div>      
    );
  }
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     actions: bindActionCreators(detailActions, dispatch)
//   };
// };

const mapStateToProps = (state) => {
  return {
    details: state.detailReducer
  }
};
export default connect(mapStateToProps, {getGit})(Index);
