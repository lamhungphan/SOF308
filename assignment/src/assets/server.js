const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Đảm bảo tệp JSON có thể truy cập

// API để lưu bài viết
app.post('/api/saveArticle', (req, res) => {
  const newArticle = req.body;

  // Đọc các bài viết hiện có
  const filePath = path.join(__dirname, 'articles.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Lỗi khi đọc tệp JSON' });
    }

    const articles = JSON.parse(data);
    articles.push(newArticle); // Thêm bài viết mới vào danh sách

    // Lưu lại vào tệp JSON
    fs.writeFile(filePath, JSON.stringify(articles, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: 'Lỗi khi lưu bài viết' });
      }
      res.status(200).json({ message: 'Bài viết đã được lưu thành công' });
    });
  });
});

// Khởi chạy server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
