import express from 'express';
const app = express();

var data = { 
  portal : "GeeksforGeeks", 
  knowledge : "unlimited", 
  location : "Noida"  
} 


app.get('/', (req, res) => {
  console.log("sdflkjsdlfhjlsjdhlfsjdhlkf");
  return res.send(data);
});

export default app;
