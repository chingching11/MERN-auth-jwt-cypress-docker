import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from "axios"

function RequireAuth(ComponentToProtect) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
      };
    }
    componentDidMount() {
        axios.get('http://localhost:8080/verify', { withCredentials: true })
        .then(res => {
          if (res.status === 200) {
            this.setState({ loading: false });
          } 
        })
        .catch(err => {
          console.log(err);
          this.setState({ redirect: true , loading: false});
        });
    }
    render() {
      const { loading, redirect } = this.state;
      if(loading) {
        return null
      }
      if (redirect) {
          return <Redirect to="/login" />;
      }
        return <ComponentToProtect {...this.props} />;
    }
  }
}
export default RequireAuth