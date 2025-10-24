CREATE TABLE IF NOT EXISTS blockchain_events (
  id SERIAL PRIMARY KEY,
  event_type VARCHAR(50) NOT NULL,
  contract_address VARCHAR(100),
  tx_hash VARCHAR(100) UNIQUE,
  sender VARCHAR(100),
  receiver VARCHAR(100),
  token_id VARCHAR(100),
  value NUMERIC,
  block_number BIGINT,
  created_at TIMESTAMP DEFAULT NOW()
);
