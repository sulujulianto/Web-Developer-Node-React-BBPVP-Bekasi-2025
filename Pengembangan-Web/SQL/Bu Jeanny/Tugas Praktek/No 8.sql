SELECT 
    users.name AS author_name,
    blog_posts.title AS post_title
FROM blog_posts
JOIN users ON blog_posts.author_id = users.id
WHERE blog_posts.id IN (
    SELECT post_id 
    FROM post_categories
    GROUP BY post_id
    HAVING COUNT(category_id) = 1
);