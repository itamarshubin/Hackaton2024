import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { FC, useState } from 'react';
import { Mail } from '../../../hooks/login.hook';
const MailList: FC<{ mails: Mail[] }> = ({ mails }) => {
  const [checked, setChecked] = useState<number[]>([]);

  const handleMailClick = (index: number) => () => {
    const currentIndex = checked.indexOf(index);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(index);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: '100%', maxWidth: '70vw' }}>
      {mails.map((value, index) => {
        return (
          <ListItem key={index} disablePadding onClick={handleMailClick(index)}>
            <ListItemButton role={undefined}>
              <Box width="100%">
                <Box display="flex" justifyContent="space-between" width="100%">
                  <Typography fontWeight="bold">{value.from}</Typography>
                  <Typography> {value.subject}</Typography>
                  <Typography>
                    {checked.includes(index) ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
                  </Typography>
                </Box>
                {checked.includes(index) && (
                  <Box
                    width="100%"
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                    sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                  >
                    <Typography variant="h3">{value.subject}</Typography>
                    <Typography marginLeft="1%" variant="h6">
                      {value.content}
                    </Typography>
                  </Box>
                )}
              </Box>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};
export default MailList;
