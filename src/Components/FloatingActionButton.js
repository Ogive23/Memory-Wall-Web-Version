import React, { Component } from 'react'
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import ReportIcon from '@mui/icons-material/Report'; import ChatIcon from '@mui/icons-material/Chat';
import { onAddMemoryActionClicked, onChatActionClicked, onReportActionClicked } from '../Hooks/FloatingActionButtonsHooks';
import { Link } from "react-router-dom";
const actions = [
    { icon: <Link to="/add-memory"><AddIcon /></Link>, name: 'Add Memory', color: 'blue', onClicked: onAddMemoryActionClicked },
    { icon: <ReportIcon />, name: 'Report Error', color: 'red', onClicked: onReportActionClicked },
    { icon: <ChatIcon />, name: 'Talk to us', color: 'green', onClicked: onChatActionClicked },
];

export class FloatingActionButton extends Component {
    render() {
        return (<Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }} style={{ right: 20, bottom: 20, position: 'fixed' }}>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<MenuIcon />}
            >
                {actions.reverse().map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        color={action.color}
                        onClick={action.onClicked}
                    />
                ))}
            </SpeedDial>
        </Box>);
    }
}
export default FloatingActionButton
