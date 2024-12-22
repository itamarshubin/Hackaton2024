type Mail = { from: string; content: string; subject: string };

const mails: Mail[] = [
  {
    from: 'UndercoverKugel',
    content:
      'I tried connecting to the secret service, at <ip> on port <port> just like you said. I got a number, and sent the service back the hour*number, but it didn\'t work. Any idea why?',
    subject: "Can't connect to secret service",
  },
  {
    from: 'PelegTechSupport',
    content:
      'Good morning UK. The reason is because you need to send back (hour+minute)*number. Good luck!',
    subject: "Reply: Can't connect to secret service",
  },
];

export default mails;
