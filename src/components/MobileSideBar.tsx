import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

interface MobileSideBarProps {
  pages: string[];
  toggleDrawer: (newOpen: boolean) => void;
  drawerOpen: boolean;
  darkMode: boolean;
};

const MobileSideBar: React.FC<MobileSideBarProps> = ({
  pages,
  toggleDrawer,
  drawerOpen,
  darkMode,
}) => {

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => toggleDrawer(false)}>
      <List>
        {pages.map((page) => (
          <ListItem key={page} disablePadding>
            <ListItemButton>
              <ListItemText primary={page} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={() => toggleDrawer(false)}
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: darkMode ? '#353b3c' : '#c3b5b5',
          color: darkMode ? '#fff' : '#151515',
        },
      }}
    >
      {DrawerList}
    </Drawer>
  )
}

export default MobileSideBar;