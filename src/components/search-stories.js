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

  onSubmit = (event) => {
    const { fetchStories } = this.props
    const { query } = this.state
    fetchStories(query)

    event.preventDefault()
  }

  onChange = (event) => {
    this.setState({
      query: event.target.value,
    })
  }

  componentDidMount() {
    const { fetchStories } = this.props
    const { query } = this.state
    fetchStories(query)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" onChange={this.onChange} value={this.state.query} />
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
