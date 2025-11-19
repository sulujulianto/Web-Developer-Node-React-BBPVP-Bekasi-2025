SELECT 
    blog_posts.id,
    blog_posts.title,
    blog_posts.body,
    blog_posts.author_id,
    users.id,
    users.name
FROM blog_posts
JOIN users ON blog_posts.author_id = users.id
WHERE users.name = 'John Doe';