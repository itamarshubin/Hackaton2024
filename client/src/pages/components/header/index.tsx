import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Drawer from "./Drawer";
import logo from "../../../assets/cyber.svg";
import { pages } from "../../../main";
import { useNavigate } from "react-router-dom";

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: "#191a19" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => setMobileOpen(!mobileOpen)}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img
              style={{ cursor: "pointer" }}
              src={logo}
              width="60px"
              onClick={() => navigate("/")}
            />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {pages.map((item) => (
              <Button
                key={item}
                sx={{ color: "#fff" }}
                onClick={() => {
                  navigate(item);
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer isOpen={mobileOpen} setIsOpen={setMobileOpen} />
      </nav>
    </Box>
  );
}
