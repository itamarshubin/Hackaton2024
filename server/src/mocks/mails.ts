type Mail = { from: string; content: string; subject: string };

const mails: Mail[] = [
  {
    from: 'PelegTechSupport',
    content:
      'Hey, U.K., hope all is well. I raised an FTP server, where you can find an updated WiFi password for the network with the bomb location. I changed it from what was on the PC. The FTP server IP is 91.223.106.183, the user is "Herring" and the password is "5alty". The port is 2121. If youre looking for a good program for connecting to FTP servers, Id reccomend FileZilla. Good Luck!',
    subject: 'Updated WiFi pw',
  },
  {
    from: 'UndercoverKugel',
    content:
      'Good morning. I tried connecting to the secret service, at 91.223.106.183 on port 19000 like you said. I got a number, and sent the service back the hour*number, but it didnt work. Any idea why?',
    subject: 'Cant connect to secret service',
  },
  {
    from: 'PelegTechSupport',
    content:
      'Good morning U.K.. The reason is because you need to send back (hour+minute)*number. Good luck!',
    subject: 'Reply: Cant connect to secret service',
  },
  {
    from: 'UndercoverKugel',
    content:
      'Hi, I configured the bomb and set up the network which has its secret location. Can you make sure I connected to the right network? I set up an RDP port you can connect to, on 91.223.106.183 at port 5122<TEAM NUMBER>. I just want to make sure I set up the right thing...',
    subject: 'Verify WiFi network',
  },
  {
    from: 'PelegTechSupport',
    content:
      'I checked, looks good. It took me a minute to remember that your user is "Kugel<TEAM NUMBER>"" and that your password is "50and50gates", but then it worked :)',
    subject: 'Reply: Verify WiFi network',
  },
];

export default mails;
