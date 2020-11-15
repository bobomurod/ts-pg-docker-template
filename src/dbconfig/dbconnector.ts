import { Pool } from 'pg';

export default new Pool ({
    max: 20,
    connectionString: 'postgres://user1:user1@localhost:5432/test_db',
    idleTimeoutMillis: 30000
})