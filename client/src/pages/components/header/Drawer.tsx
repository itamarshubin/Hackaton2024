import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer as MuiDrawer,
  Typography,
} from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react";
import logo from "../../../assets/cyber.svg";
import { useNavigate } from "react-router-dom";
import { pages } from "../../../main";

interface DrawerProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const Drawer: FC<DrawerProps> = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  return (
    <MuiDrawer
      variant="temporary"
      open={isOpen}
      onClose={() => setIsOpen(!isOpen)}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: 240,
          background: "#191a19",
        },
      }}
    >
      <Box
        onClick={() => setIsOpen(!isOpen)}
        sx={{ textAlign: "center", background: "#191a19" }}
      >
        <Typography variant="h6" sx={{ my: 2 }}>
          <img src={logo} width="60px" />
        </Typography>
        <Divider />
        <List>
          {pages.map((item) => (
            <ListItem
              key={item}
              disablePadding
              onClick={() => {
                navigate(item);
                //TODO - navigate to the thing
                console.log(item);
              }}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>{" "}
    </MuiDrawer>
  );
};

export default Drawer;
