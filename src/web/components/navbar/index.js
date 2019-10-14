import React, { Component } from 'react';
import { NavbarStyle } from './style';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';
class Navbar extends Component {
    render() {
        return (
            <div>
                <NavbarStyle>
                    <div className="navHeader">
                        Title
                    </div>
                    <div className="navList">
                        <ul>
                            <li>
                                <i class="material-icons">home</i> Home
                            </li>
                            <li>
                                <i class="material-icons">person</i> Profile
                            </li>
                            <li>
                                <i class="material-icons">add_circle_outline</i> Add Task
                            </li>
                        </ul>
                    </div>
                    <div className="navFooter">
                        <Avatar>
                            <AssignmentIcon />
                        </Avatar>
                    </div>
                </NavbarStyle>
            </div>
        );
    }
}

export default Navbar;