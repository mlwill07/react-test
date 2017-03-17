import React from 'react';
import Header from './Header';
import Users from '../Users';
import UserTable from './UserTable';


class App extends React.Component {
    constructor() {
        super()
        this.sortUsers = this.sortUsers.bind(this)
        this.filterUsers = this.filterUsers.bind(this)
        this.toggleSend = this.toggleSend.bind(this)
        this.addEmail = this.addEmail.bind(this)
        this.state = {
            users: Users.sort(function(a,b){return a.lastName > b.lastName}),
            email: []
        }
    }

    sortUsers(property) {
        var users = [...this.state.users];
        users.sort(function(a, b){
            return a[property] > b[property];
        })
        this.setState({
            users: users
        })
    }

    filterUsers(status) {
        var users = Users;
        if(status === 'active') status = true;
        if(status === 'inactive') status = false;
        if(status !== 'all') {
           users = users.filter(function (user) {
                return user.isActive === status
            })
        }
        this.setState({
            users: users
        })
    }

    toggleSend(index) {

        var users = [...this.state.users];

        if(users[index].send === true) {
            users[index].send = false
        } else if (users[index].send === false) {
            users[index].send = true
        };
        this.setState({
            users: users
        })
    }

    addEmail(newEmail) {

        var email = [...this.state.email];
        email.push(newEmail);
        this.setState({
            email: email
        }, function(){console.log(this.state.email)})

    }

    render() {
        return (
            <div>
                <Header />
                <UserTable users={this.state.users} sortUsers={this.sortUsers} filterUsers={this.filterUsers} toggleSend={this.toggleSend} addEmail={this.addEmail}/>

            </div>
        )
    }
}

export default App;