import React from 'react';

class UserList extends React.Component {
    render() {
        const { details } = this.props
        return (
            <tr>
                <td>
                    <input type="checkbox" checked={details.send}  onChange={() =>  this.props.toggleSend(this.props.index)} />
                </td>
                <td>{details.firstName} {details.lastName} </td>
                <td>{details.office} </td>
                <td>{details.isActive? 'Active' : 'Inactive'}</td>
            </tr>
        )
    }
}

export default UserList;