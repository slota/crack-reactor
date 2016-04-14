var AllSkills = React.createClass({
  getInitialState() {
    return { skills: [] }
  },

  componentDidMount() {
    $.getJSON('/api/v1/skills.json', (response) => { this.setState({ skills: response }) });
  },

  render() {
    (console.log(this.state))
    return (
      <div>
        <h1> These are all my skills </h1>
        <h2> super kewl story breh </h2>
      </div>
    )
  }


});
