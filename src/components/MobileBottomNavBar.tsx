import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';

interface MobileBottomNavBarProps {
  sections: string[];
  handleSectionClick: (section: string) => void;
  darkMode: boolean;
}

const MobileBottomNavBar: React.FC<MobileBottomNavBarProps> = ({
  sections,
  handleSectionClick,
  darkMode,
}) => {
  const [value, setValue] = useState(-1);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    handleSectionClick(sections[newValue].toLowerCase());
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: darkMode ? '#353b3c' : '#c3b5b5',
        color: darkMode ? '#fff' : '#151515',
      }}
    >
      <BottomNavigationAction
        label="About"
        icon={<InfoIcon sx={{ color: value === 0 ? '#fa7702' : (darkMode ? '#fff' : '#151515') }} />}
        sx={{
          color: value === 0 ? '#fa7702 !important' : (darkMode ? '#fff' : '#151515'),
        }}
      />
      <BottomNavigationAction
        label="Projects"
        icon={<WorkIcon sx={{ color: value === 1 ? '#fa7702' : (darkMode ? '#fff' : '#151515') }} />}
        sx={{
          color: value === 1 ? '#fa7702 !important' : (darkMode ? '#fff' : '#151515'),
        }}
      />
      <BottomNavigationAction
        label="Contact"
        icon={<EmailIcon sx={{ color: value === 2 ? '#fa7702' : (darkMode ? '#fff' : '#151515') }} />}
        sx={{
          color: value === 2 ? '#fa7702 !important' : (darkMode ? '#fff' : '#151515'),
        }}
      />
    </BottomNavigation>
  );
};

export default MobileBottomNavBar;
