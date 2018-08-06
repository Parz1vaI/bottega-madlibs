handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value })
    console.log(this.state)       
}