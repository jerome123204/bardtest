const express = require('express');
const { bardAI, bardAsk } = require('bard-test');

const app = express();
const port = 3000; // port

app.get('/ask', async (req, res) => {
  const cookies = req.query.cookies;

  if (!cookies) {
    res.status(400).json({ error: 'Please provide the cookies as a query parameter.' });
    return;
  }

  try {
await new bardAI(cookies).login();

 
const response = await bardAsk(req.query.question);

    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
}
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
