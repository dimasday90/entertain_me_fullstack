import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";

export default function Header() {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Box color="warning.main">
          <Typography variant="h4">Entertain</Typography>
        </Box>
        <Box color="background.paper">
          <Typography variant="h4">{`(<^_^>)`}</Typography>
        </Box>
        <Box color="error.main">
          <Typography variant="h4">Me</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
