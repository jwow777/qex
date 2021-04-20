import { List, ListItem, ListItemText } from "@material-ui/core";
import News from "./News";

export default function Main() {
  return (
    <>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem divider={true}>
          <ListItemText primary="Тестовое задание:" />
        </ListItem>
      </List>
      <News />
    </>
  );
}
