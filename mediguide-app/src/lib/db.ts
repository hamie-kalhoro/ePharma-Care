import postgres from 'postgres';

// Live Connection URI for your Supabase Postgres
const connectionString = 'postgresql://postgres.jcdnccetwegqjlikcqgr:medi-guide.com@aws-1-ap-south-1.pooler.supabase.com:5432/postgres';

// Initialize the query pool with standard SSL requirements
const sql = postgres(connectionString, {
  ssl: 'require',
  max: 10, // Max connection pool limit
  idle_timeout: 20, // Max idle time before dropping connection
  connect_timeout: 10, // Connect timeout in seconds
});

export default sql;
