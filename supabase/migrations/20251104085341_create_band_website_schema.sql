/*
  # Band Website Schema

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `name` (text)
      - `type` (text) - 'album' or 'merch'
      - `price` (numeric)
      - `image_url` (text)
      - `created_at` (timestamptz)
    
    - `tours`
      - `id` (uuid, primary key)
      - `date` (date)
      - `city` (text)
      - `venue` (text)
      - `ticket_url` (text, optional)
      - `created_at` (timestamptz)
    
  2. Security
    - Enable RLS on all tables
    - Products and tours are publicly readable
    - Only authenticated admins can modify (future enhancement)
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  type text NOT NULL CHECK (type IN ('album', 'merch')),
  price numeric(10, 2) NOT NULL CHECK (price >= 0),
  image_url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS tours (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date date NOT NULL,
  city text NOT NULL,
  venue text NOT NULL,
  ticket_url text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE tours ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Products are publicly readable"
  ON products FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Tours are publicly readable"
  ON tours FOR SELECT
  TO anon
  USING (true);