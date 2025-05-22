# RevisePDF

A simplified clone of the RevisePDF.com website with PDF compression functionality. This lightweight application allows users to upload PDF files and simulates the compression process.

## Live Demo

Visit the live application at [https://revisepdf-simple-calum-466c32c27c9d.herokuapp.com/](https://revisepdf-simple-calum-466c32c27c9d.herokuapp.com/)

## Features

- Clean, modern UI
- PDF file upload with drag-and-drop functionality
- Simulated PDF compression with progress indicator
- Responsive design for all devices
- Lightweight and fast loading

## Technology Stack

- **Server**: Node.js with Express.js
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Deployment**: Heroku

## Project Structure

```
revisepdf-auth/
├── public/               # Static files
│   ├── css/              # CSS stylesheets
│   │   └── styles.css    # Main stylesheet
│   ├── js/               # JavaScript files
│   │   └── main.js       # Main JavaScript file
│   ├── index.html        # Main HTML file
│   └── logo.svg          # Logo file
├── server.js             # Express server
├── package.json          # Project dependencies
├── package-lock.json     # Dependency lock file
├── Procfile              # Heroku configuration
└── README.md             # Project documentation
```

## Development

### Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Calum-Kerr/revisepdf-auth.git
   cd revisepdf-auth
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured for deployment on Heroku. Follow these steps to deploy your own instance:

1. Create a Heroku account if you don't have one at [https://signup.heroku.com/](https://signup.heroku.com/)

2. Install the Heroku CLI:
   ```bash
   npm install -g heroku
   ```

3. Login to Heroku:
   ```bash
   heroku login
   ```

4. Create a new Heroku app:
   ```bash
   heroku create your-app-name
   ```

5. Add the Heroku remote:
   ```bash
   git remote add heroku https://git.heroku.com/your-app-name.git
   ```

6. Push to Heroku:
   ```bash
   git push heroku main
   ```

7. Open your app:
   ```bash
   heroku open
   ```

### Environment Variables

No environment variables are required for this simplified version.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Developed by Calum from Scotland.
