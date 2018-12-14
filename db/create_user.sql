INSERT INTO cstmrlogin
(
  userName, 
  hash_value
  
)
VALUES
(
  $1, $2
)
RETURNING *