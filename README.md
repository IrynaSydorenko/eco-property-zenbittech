# SET UP LOCAL POSTGRESQL DB

Setting up a local PostgreSQL database involves several steps. Here's a step-by-step guide:

1. Installation:
   macOS:
   Using Homebrew:

brew install postgresql

Once installed, you can start the PostgreSQL server using:
brew services start postgresql

2. Basic Configuration:
   Create a Database:
   After installation, a postgres user and a postgres database are created by default. To create a new database:

Switch to the postgres user:
sudo -u postgres psql

Create a new database:
CREATE DATABASE yourdbname;

Create a new user:
CREATE USER yourusername WITH PASSWORD 'yourpassword';

Grant privileges:
GRANT ALL PRIVILEGES ON DATABASE yourdbname TO yourusername;

3. DB Connection:

postgresql://postgres:yourpassword@localhost:5432/mydb

# SET UP .ENV VARS

You need to set up
DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/mydb"
JWT_SECRET="YOUR_SECRET_HERE"
SHADOW_DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/mydb"

# SEED THE LOCAL DB

Run "npm run seed" in the server

After all you can run the server and the client!!!

# MY OPINION

The website finished 85%-90%. Need to be implemented the authorization on the front-end. But on the backend auth logic, routes and models are written. But I think in my opinion for 2-3 days it is quite a big chunk of work if do it with good quality, please let me know if you have any questions and share your opinion :)
