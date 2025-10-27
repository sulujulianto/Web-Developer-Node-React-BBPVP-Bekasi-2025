SELECT 
    categories.name AS category_name,
    blog_posts.title AS post_title,
    blog_posts.body
FROM post_categories
JOIN categories ON post_categories.category_id = categories.id
JOIN blog_posts ON post_categories.post_id = blog_posts.id
JOIN users ON blog_posts.author_id = users.id
WHERE users.name IN ('Robert', 'Frank');