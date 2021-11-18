const Pool = require('pg').Pool;

const pool = new Pool({
    host: 'ec2-107-20-127-127.compute-1.amazonaws.com',
    user: 'heevqtxaiztajd',
    password: 'e953d8c11e34ee57d5a4d1256ab2710a05bea7c493d3dbb53a4c780389cadac3',
    database: 'd2rfa314nkmtdt',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})

module.exports = pool;