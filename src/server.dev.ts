import * as express from 'express';

// Global application variables.
const PORT = process.env.PORT || 9000;

// Create express application.
const app = express();

// Middleware.

// Start server.
app.listen(PORT, () => {
    // tslint:disable-next-line
    console.log(`Server running on port: ${PORT}`);
});

// Graceful shutdown.
process.on(`SIGINT`, () => {
    process.exit(0);
});
