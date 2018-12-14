CREATE TABLE cstmrlogin
(
  id SERIAL PRIMARY KEY,
  userName VARCHAR(180),
  hash_value TEXT
)