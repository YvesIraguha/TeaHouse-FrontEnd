import React, { Component } from 'react'
import { connect } from 'react-redux';
import { initialActionCreator } from '../redux/actionsCreators'

export class Home extends Component {
  state = { ...this.props.data }

  loadData = () => {
    const { fetchData } = this.props;
    const url = "https://jsonplaceholder.typicode.com/todos"
    fetchData(url)
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <button onClick={this.loadData}>Button</button>
        {data.data ? data.data.map(post => <div key={post.id}>
          <h6>{post.id + ")" + post.title}</h6>
        </div>) : null}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  data: state
});

export const mapDispatchToProps = (dispatch) => ({
  fetchData: (url) => dispatch(initialActionCreator(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);