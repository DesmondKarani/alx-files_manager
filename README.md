# Files Manager

## Project Overview

This project is a comprehensive back-end exercise that combines various technologies and concepts learned throughout the trimester. The goal is to build a simple platform for uploading and viewing files, incorporating authentication, file management, and image processing.

## Key Features

- User authentication via tokens
- File listing
- File upload
- File permission management
- File viewing
- Thumbnail generation for images

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Redis
- Bull (for background processing)
- ES6

## Getting Started

### Prerequisites

- Ubuntu 18.04 LTS
- Node.js (version 12.x.x)
- npm

### Installation

1. Clone the repository
2. Run `npm install` to install dependencies

### Running the Application

- Start the server: `npm run start-server`
- Start the worker: `npm run start-worker`
- Development mode: `npm run dev`

### Testing

Run tests using: `npm test`

## Project Structure

- `server.js`: Main application file
- `worker.js`: Background worker for processing tasks
- `/utils`: Helper functions and utilities

## API Endpoints

(List and briefly describe the main API endpoints here)

## Learning Objectives

This project covers:

- Creating an API with Express
- User authentication
- Data storage in MongoDB
- Temporary data storage in Redis
- Setting up and using a background worker

## Contributors

- Desmond Karani

## License

ISC
