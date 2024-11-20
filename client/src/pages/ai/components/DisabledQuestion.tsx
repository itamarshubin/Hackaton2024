import { Box, Typography } from '@mui/material';
import './disabledQuestion.css';
export const DisabledQuestion = () => {
  return (
    <Box height="100%" width="100%" display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h2" mb="-2rem">
        !צריך לענות על השאלות הקודמות לפני
      </Typography>
      <div id="main-wrapper">
        <div id="box">
          <div id="top-background-bars-wrapper" className="background-bars-wrapper">
            <div className="bar1 background-bar"></div>
            <div className="bar2 background-bar"></div>
            <div className="bar3 background-bar"></div>
            <div className="bar4 background-bar"></div>
            <div className="bar5 background-bar"></div>
            <div className="bar6 background-bar"></div>
            <div className="bar7 background-bar"></div>
            <div className="bar8 background-bar"></div>
            <div className="bar9 background-bar"></div>
            <div className="bar10 background-bar"></div>
          </div>

          <div id="bottom-background-bars-wrapper" className="background-bars-wrapper">
            <div className="bar1 background-bar"></div>
            <div className="bar2 background-bar"></div>
            <div className="bar3 background-bar"></div>
            <div className="bar4 background-bar"></div>
            <div className="bar5 background-bar"></div>
            <div className="bar6 background-bar"></div>
            <div className="bar7 background-bar"></div>
            <div className="bar8 background-bar"></div>
            <div className="bar9 background-bar"></div>
            <div className="bar10 background-bar"></div>
          </div>

          <svg id="skull" viewBox="0 0 500 565" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="softGlow" height="300%" width="400%" x="-75%" y="-75%">
                <feMorphology operator="dilate" radius="5" in="SourceAlpha" result="thicken" />
                <feGaussianBlur in="thicken" stdDeviation="5" result="blurred" />
                <feFlood floodColor="rgb(255,0,0)" result="glowColor" />
                <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored" />

                <feMerge>
                  <feMergeNode in="softGlow_colored" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <g transform="translate(50 330)">
              <path
                fill="white"
                stroke="black"
                strokeWidth="20"
                filter="url(#softGlow)"
                d="
                                             M 0 0
                                             a 215 215 0 1 1 400 0
                                             v 50
                                             h 20
                                             v 90
                                             l -20 20
                                             h -80
                                             v -30
                                             v 70
                                             h -240
                                             v -70
                                             v 30
                                             h -80
                                             l -20 -20
                                             v -90
                                             h 20
                                             z"
              />
              <circle id="left-eye" fill="red" stroke="black" strokeWidth="20" cx="100" cy="0" r="50" />
              <use href="#left-eye" x="200" y="0" />

              <path
                id="nose"
                fill="none"
                stroke="black"
                strokeWidth="20"
                d="
                                                     M 200 50
                                                     v 40"
              />
              <use id="tooth" href="#nose" x="-90" y="100" />
              <use href="#tooth" x="40" y="0" />
              <use href="#tooth" x="90" y="0" />
              <use href="#tooth" x="140" y="0" />
              <use href="#tooth" x="180" y="0" />
            </g>
          </svg>
          <div className="warning-msg">ACCESS DENIED</div>
        </div>
      </div>
    </Box>
  );
};
