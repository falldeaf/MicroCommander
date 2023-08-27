# MicroCommander

## Overview

MicroCommander is a Node.js library that makes it easier to define RESTful APIs for microservices with built-in capabilities for configuration management, logging, and task scheduling. It is designed to work effortlessly with Redis for service discovery. Built on top of Express.js, it allows quick and flexible development of microservices.

## Features

- Dynamic API Route Definition
- Built-in Task Scheduling with cron
- Configuration Management
- Logging
- File Uploads
- Switches & Actions
- Easy Service Discovery using Redis
- Automatic API Mapping

## Installation

Install via npm:
\`\`\`
npm install micro-commander
\`\`\`

## Quick Start

Here's a simple example to get you started:

\`\`\`javascript
const MicroCommander = require('micro-commander');

const myService = new MicroCommander('config.json', 'MyService', 8080, true);

// Define an action route
myService.defineAction('sayHello', () => {
    console.log('Hello, World!');
}, 'Greetings', 'Prints Hello, World! to the console');

// Start the service
myService.listen();
\`\`\`

Now, if you send a GET request to \`http://localhost:8080/sayHello\`, it will execute the action and you'll see "Hello, World!" printed to the console.

## API Documentation

### Initialization

\`\`\`javascript
const myService = new MicroCommander(configFile, serviceName, port, discoverable);
\`\`\`

### Method: \`defineAction(path, callback, category, description)\`

Defines an action that can be executed through a GET request.

### Special Routes

- **/map**: This route shows all available commands in JSON format.
- **/save**: This route saves any current configurations to disk. Configurations are only available in memory otherwise.

## Dependencies

- express
- node-cron
- body-parser
- lodash.merge
- redis
- multer
- fs

## Contributing

We welcome contributions! Please create an issue or submit a pull request.
