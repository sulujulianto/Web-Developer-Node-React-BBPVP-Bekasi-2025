use db_blog_posts;

insert into blog_posts (id, title, body, author_id) values
(1, 'Algorithm', 'this is article for algorithm', 1),
(2, 'Lorem Ipsum', 'lorem ipsum dolor sit amet', 1),
(3, 'NodeJS', 'Node.js is a JavaScript runtime built on Chromes V8 JavaScript engine.', 2),
(4, 'ReactJS', 'ReactJS is JavaScript library for building user interfaces', 4),
(5, 'Git', 'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency', 3),
(6, 'Basketball', 'Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball (approximately 9.4 inches (24 cm) in diameter) through the defenders hoop (a basket 18 inches (46 cm) in diameter mounted 10 feet (3.048 m) high to a backboard at each end of the court, while preventing the opposing team from shooting through their own hoop', 2);