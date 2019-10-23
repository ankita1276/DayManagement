import React, { Component } from 'react';
import { NavbarStyle } from './style';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { NavLink } from 'react-router-dom';
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
                            <li >
                                <NavLink to="/home" activeClassName="active">
                                    <i class="material-icons">home</i> Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/addtask">
                                <i class="material-icons">add_circle_outline</i> Add Task
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/profile">
                                    <i class="material-icons">person</i> Profile
                                </NavLink>

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