const express = require('express');
const path = require('path');
const app = express();

// Порт сервера
const PORT = process.env.PORT || 3000;

// Отдача файлов из /public по прямому URL
app.use('/public', express.static(path.join(__dirname, 'public')));

// Отдаём HTML-файл по корневому маршруту
app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});
