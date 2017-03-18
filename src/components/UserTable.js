import React from 'react';
import UserList from './UserList'
import EmailTemp from './EmailTemp';

class UserTable extends React.Component {
    constructor() {
        super();
        this.renderEmailForm = this.renderEmailForm.bind(this)
        this.createEmail = this.createEmail.bind(this)
        this.state = {
            showEmail: false
        }
    }

    renderEmailForm(event) {
        event.preventDefault();
        var email = {...this.state}
        if(this.state.showEmail) {
            this.setState({
                showEmail: false
            })
        }
        if(!email.showEmail) {
            this.setState({
                showEmail: true
            })
        }
    }

    createEmail(email) {
        event.preventDefault();
        var emailList = this.props.users.filter(function(user) {return user.send === true})
        email.sendTo = [];
        for( var key in emailList) {
            var userEmail = emailList[key].email
            email.sendTo.push(userEmail)
        }
        this.props.addEmail(email)
    }

    render() {
        return (
            <div className="table-content">
            <table>
                <thead>
                <tr>
                    <th>Select</th>
                    <th className="sort" onClick={() => this.props.sortUsers("lastName")}>User</th>
                    <th className="sort" onClick={() => this.props.sortUsers("office")}>Office</th>
                    <th >
                        <select ref={(input) => this.input = input} onChange={() => this.props.filterUsers(this.input.value)}>
                            <option  value="all" default>All</option>
                            <option   value="active">Active</option>
                            <option  value="inactive">InActive</option>
                        </select>
                    </th>
                </tr>

                </thead>
                <tbody>
                {this.props.users.map((user, index) => <UserList key={index} index={index} details={this.props.users[index]} toggleSend={this.props.toggleSend}/>)}
                </tbody>
            </table>
                <button type="submit" onClick={(e) => this.renderEmailForm(e)}>Email Users</button>
                {this.state.showEmail ? <EmailTemp createEmail={this.createEmail}/> : null}
            </div>
        )
    }
}

export default UserTable;