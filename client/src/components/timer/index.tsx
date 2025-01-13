import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date(targetDate);
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (unit) => (unit < 10 ? `0${unit}` : unit);

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          gap: '40px',
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#333',
        }}
      >
        {Object.entries(timeLeft).map(([unit, value]) => (
          <Box
            key={unit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <motion.div
              key={`${unit}-${value}`}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{ fontSize: '3rem', fontWeight: 'bold', color: 'rgb(221, 197, 157)' }}
            >
              {formatTime(value)}
            </motion.div>
            <Typography
              variant="caption"
              sx={{
                fontSize: '1rem',
                color: 'rgb(168, 140, 92)',
              }}
            >
              {unit[0].toUpperCase() + unit.slice(1)}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CountdownTimer;
