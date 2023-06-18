const mysql = require('mysql2');

const db_config = {
    host: '1.15.136.115',
    user: 'Blog',
    password: 'chen0416',
    database: 'blog',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

let pool;

function handleDisconnect() {
    pool = mysql.createPool(db_config);

    pool.getConnection((err, connection) => {
        if (err) {
            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                handleDisconnect();
            } else {
                throw err;
            }
        }
        
        if (connection) {
            connection.release();
        }
    });

    pool.on('error', (err) => {
        console.error('Database error: ', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnect();
        } else {
            throw err;
        }
    });

    console.log('The connection pool was created successfully');
}

handleDisconnect();

// 每10分钟（600000毫秒）发送一个查询来保持连接活动
setInterval(() => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Failed to get connection for keep-alive query: ', err);
        } else {
            connection.query('SELECT 1', (err) => {
                connection.release();  // don't forget to release the connection when you're done
                if (err) console.error('Failed to execute keep-alive query: ', err);
            });
        }
    });
}, 600000);

module.exports = pool;
