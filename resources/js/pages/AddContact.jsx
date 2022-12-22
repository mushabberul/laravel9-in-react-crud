import React, { Component } from 'react'

export default class AddContact extends Component {
    state = {
        name: 'Sabbir',
        email: '',
        phone: ''
    }
    handalChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    saveContact = (e) => {
        e.preventDefault()
    };
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6 m-auto">
                        <div className="card">
                            <div className="card-header">
                                <h1 >Add Contact</h1>
                            </div>
                            <div className="card-body">
                                <div className="">
                                    <form onSubmit={this.saveContact}>
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" name='name' value={this.state.name} onChange={(event) => this.handalChange()} className="form-control" id="name" placeholder="Enter name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" name='email' value={this.state.email} onChange={(event) => this.handalChange()} className="form-control" id="email" placeholder="Enter email" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone</label>
                                            <input type="phone" name='phone' value={this.state.phone} onChange={(event) => this.handalChange()} className="form-control" id="phone" placeholder="Enter phone" />
                                        </div>

                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
