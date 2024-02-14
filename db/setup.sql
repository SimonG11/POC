DROP TABLE IF EXISTS blog;
CREATE TABLE blog (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255)
);
INSERT INTO blog (title) VALUES
    ('Blog post #1'),
    ('Blog post #2'),
    ('Blog post #3'),
    ('Blog post #4');
