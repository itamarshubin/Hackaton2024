import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';
import { database } from '../../firebase';
import { ref, onValue } from 'firebase/database';
import { Box, Typography } from '@mui/material';
import CountdownTimer from '../../components/timer';

const Scoreboard = () => {
  const [scores, setScores] = useState([]);
  const [prevScores, setPrevScores] = useState({});
  const [animatingScores, setAnimatingScores] = useState([]);
  const [changingTeams, setChangingTeams] = useState(new Set());

  useEffect(() => {
    const scoresRef = ref(database, 'Scoreboard');
    
    const unsubscribe = onValue(scoresRef, (snapshot) => {
      const data = snapshot.val();
      const formattedScores = Object.entries(data).map(([team, score]) => ({
        team,
        score: parseInt(score, 10)
      }));

      // Identify teams with changing scores
      const changedTeams = new Set();
      formattedScores.forEach(({ team, score }) => {
        if (prevScores[team] !== undefined && prevScores[team] !== score) {
          changedTeams.add(team);
        }
      });
      setChangingTeams(changedTeams);

      setPrevScores(prev => {
        const newPrevScores = {};
        formattedScores.forEach(({ team, score }) => {
          newPrevScores[team] = prev[team] || score;
        });
        return newPrevScores;
      });

      setAnimatingScores(scores);
      
      formattedScores.sort((a, b) => b.score - a.score);
      
      setTimeout(() => {
        setAnimatingScores(formattedScores);
        setChangingTeams(new Set());
      }, 2000);
      
      setScores(formattedScores);
    });

    return () => unsubscribe();
  }, []);

  const getTeamPosition = (team) => {
    const index = animatingScores.findIndex(score => score.team === team);
    return index === -1 ? scores.findIndex(score => score.team === team) : index;
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <CountdownTimer targetDate={new Date(1737084600000)}/>
        <Typography mt="4vh" variant='h2'>Leader Board</Typography>
        <Box mt="2vh" width={"100%"}>
          <AnimatePresence>
            {scores.map((item) => {
              const position = getTeamPosition(item.team);
              
              return (
                <motion.div
                  key={item.team}
                  initial={{ y: position * 10 }}
                  animate={{ y: position * 10 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                  }}
                  style={{ display: 'flex', gap: '20px' }}
                >
                  <Box width={"50%"} sx={{ display: 'flex', justifyContent: 'right' }}>
                    <Typography variant='h5'>
                      {item.team}
                    </Typography>
                  </Box>
                  <Box width={"50%"}>
                    <CountUp
                      start={prevScores[item.team] || 0}
                      end={item.score}
                      duration={2}
                      useEasing={true}
                    >
                      {({ countUpRef }) => (
                        <Typography variant='h5' ref={countUpRef}>
                        </Typography>
                      )}
                    </CountUp>
                  </Box>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </Box>
      </div>
    </>
  );
};

export default Scoreboard;