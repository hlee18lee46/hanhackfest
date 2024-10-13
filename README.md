# Open Source MarketPlace

Open Source MarketPlace is a platform where users can explore and contribute to various open-source projects. Users can view MongoDB-stored projects, explore popular GitHub repositories, filter projects by programming language, and submit their own open-source projects.

## Features
- **Submit Projects:** Users can submit their own open-source projects which are stored in MongoDB.
- **View MongoDB Projects:** Explore open-source projects that are stored in MongoDB.
- **View GitHub Repositories:** Explore GitHub repositories from the project creator’s account.
- **Filter Popular Repos by Language:** Discover trending GitHub repositories based on the selected programming language.

## Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas or local MongoDB setup
- GitHub account

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/hlee18lee46/hanhackfest

2. Navigate to the project directory:
cd hanhackfest

3. Install dependencies:
npm install

4. Set up environment variables:
Create a .env file in the root directory with the following content:
MONGO_URI=<Your_MongoDB_Connection_String>
PORT=5000

5. Run the application:
npm run dev
Visit the application at http://localhost:3000.

6. Navigate to the project directory:
cd hanhackfest/server

7. Run backend npm run dev:
   Visit the application at http://localhost:5000.
