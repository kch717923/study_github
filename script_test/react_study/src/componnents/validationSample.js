import React, { Component } from 'react';

class validationSample extends Component {
    state = {
        password:'',
        clicked:'',
        validated:''
    }

    handleChange = e =>{
        this.setState({
            password:e.target.value
        });
    }

    handleButtonClick = e =>{
        this.setState({
            clicked:true,
            validated:this.state.password === '0000'
        })
        this.input.style.width="200px"
    }
    render() {
        return (
            <div>
                <input
                    ref={(ref) => this.input=ref}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default validationSample;