SELECT 
    users.name AS author_name,
    categories.name AS category_name
FROM post_categories
JOIN blog_posts ON post_categories.post_id = blog_posts.id
JOIN categories ON post_categories.category_id = categories.id
JOIN users ON blog_posts.author_id = users.id
WHERE post_categories.post_id IN (
    SELECT post_id 
    FROM post_categories
    GROUP BY post_id
    HAVING COUNT(category_id) >= 2
);