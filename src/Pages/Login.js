import React, { Component } from 'react'

export class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          user: null,
          isLoggedIn: false,
          username: '',
          password: ''
        };
      }
      handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
    
      handleLogoutClick = e => {
        this.setState({ isLoggedIn: false })
      }
    
    
      onSubmit = (e) => {
        e.preventDefault();
        axios.get('API_PATH')
          .then(res => {
            const user = res.data[0].username;
            const password = res.data[0].password;
            const username = this.state.username;
            const passwordEntered = this.state.password;
            if (user === username && passwordEntered === password) {
              this.setState({ isLoggedIn: true })
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default LoginPage
