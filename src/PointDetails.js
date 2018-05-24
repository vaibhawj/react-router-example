import React from 'react';

class PointDetails extends React.Component {

  componentDidMount() {
    console.log('ComponentDidMount')
  }

  componentDidUpdate() {
    const url = new URL(window.location.href);
    const program = url.searchParams.get('program');
    if (this.state.program !== program) {
      this.setState({
        program
      })
    }
  }

  handleChange(e) {
    this.props.history.push(`/pointDetails?program=${e.target.value}`)
  }

  constructor() {
    super();
    const url = new URL(window.location.href);
    const program = url.searchParams.get('program');
    this.state = {
      program
    }
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div>
        Point Details
        <br />
        <select onChange={this.handleChange} defaultValue={this.state.program}>
          <option value="1">Program 1</option>
          <option value="2">Program 2</option>
          <option value="3">Program 3</option>
        </select>
        <br />
        <br />
        <br />
        Details for program {this.state.program}
      </div>
    )
  }

}

export default PointDetails;