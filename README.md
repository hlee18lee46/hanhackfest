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


## Usage
Submit a New Project: Navigate to the form section to add your project with a name, description, and URL.
View Projects: Explore both MongoDB-stored projects and GitHub repositories.
Filter Repos by Language: Use the language filter to discover trending GitHub repositories in your preferred language.
Contributing
We welcome contributions to Open Source MarketPlace! If you would like to contribute, please follow the guidelines below.

Fork the repository.
Create a feature branch (git checkout -b feature/my-feature).
Make your changes.
Commit your changes (git commit -m 'Add new feature').
Push to your branch (git push origin feature/my-feature).
Open a Pull Request and explain your changes.
For more details, please read our Contributing Guidelines.

## Code of Conduct
We ask all contributors to follow our Code of Conduct to ensure a welcoming environment for everyone.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
MongoDB for data storage.
GitHub API for fetching open-source repositories.
Tailwind CSS for styling.
## Contact
For any issues or feature requests, please open a new issue on the GitHub Issues page.
