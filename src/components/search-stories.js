import React from 'react'
import { connect } from 'react-redux'
import { fetchStories } from '../store/actions'
import { Button } from './button'

class SearchStories extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      query: 'redux',
    }
  }

  onFetchStories = () => {
    const { query } = this.state
    const { fetchStories } = this.props
    fetchStories(query)
  }

  onChange = (event) => {
    const { value } = event.target
    this.setState({
      query: value,
    })
  }

  onSubmit = (event) => {
    this.onFetchStories()
    event.preventDefault()
  }

  componentDidMount() {
    this.onFetchStories()
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input onChange={this.onChange} type="text" placeholder="Search" />
        <Button type="submit">Search</Button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchStories: (query) => dispatch(fetchStories(query)),
})

export default connect(
  null,
  mapDispatchToProps
)(SearchStories)
