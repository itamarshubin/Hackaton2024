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
    <List sx={{ width: '100%' }}>
      {mails.map((value, index) => {
        return (
          <ListItem key={index} disablePadding onClick={handleMailClick(index)} sx={{mt: '4px'}}>
            <ListItemButton role={undefined} >
              <Box width="100%">
                <Box display="flex" width="100%" gap="1rem">
                  <Typography fontWeight="bold" minWidth="100px">{value.from}</Typography>
                  <Typography flexGrow="1"> {value.subject}</Typography>
                  <Typography>
                    {checked.includes(index) ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
                  </Typography>
                </Box>
                {checked.includes(index) && (
                  <Box
                    width="100%"
                    display="flex"
                    flexDirection="column"
                    padding="25px"
                    sx={{ backgroundColor: 'rgb(148, 111, 63)' }}
                  >
                    <Typography variant="h5" mb="10px">{value.subject}</Typography>
                    <Typography>
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
