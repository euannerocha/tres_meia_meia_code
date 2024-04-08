ALTER TABLE orders
ADD COLUMN status VARCHAR(255) DEFAULT 'PENDING';

UPDATE orders
SET status = 'COMPLETE'
WHERE completed_at IS NOT NULL;

-- estudei sql, estou tentando fazer query

