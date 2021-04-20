import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import FaceIcon from '@material-ui/icons/Face';
import PersonIcon from '@material-ui/icons/Person';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

export default function Profile() {
  const user = JSON.parse(localStorage.data);

  return (
    <main className="profile">
      <List component="nav" aria-label="main mailbox folders">
        <ListItem divider={true}>
          <ListItemIcon>
            <VpnKeyIcon />
          </ListItemIcon>
          <ListItemText primary={`Login: `+user.username} />
        </ListItem>
        <ListItem divider={true}>
          <ListItemIcon>
            <FaceIcon />
          </ListItemIcon>
          <ListItemText primary="First name: Tolya" />
        </ListItem>
        <ListItem divider={true}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Last name: Ivanov" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CalendarTodayIcon />
          </ListItemIcon>
          <ListItemText primary="Birth date: 29/01/1992" />
        </ListItem>
      </List>
    </main>
  );
}
