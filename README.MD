<div align="center">
  <img src="./microcommander_logo.png" alt="Silly AI Gen logo of a little Napoleon on a laptop">
</div>

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
```
npm install microcommander
```

## Quick Start

Here's a simple example to get you started:

```javascript
const MicroCommander = require('micro-commander');

const myService = new MicroCommander('config.json', 'MyService', 8080, true);

// Define an action route
myService.defineAction('sayHello', () => {
    console.log('Hello, World!');
}, 'Greetings', 'Prints Hello, World! to the console');

// Start the service
myService.listen();
```

Now, if you send a GET request to \`http://localhost:8080/sayHello\`, it will execute the action and you'll see "Hello, World!" printed to the console.

## API Documentation

### Initialization

```javascript
const myService = new MicroCommander(configFile, serviceName, port, discoverable);
```

### Method: \`defineAction(path, callback, category, description)\`

Defines an action that can be executed through a GET request.

	path: The URL path for the action.
	callback: The function to execute when the action is triggered.
	category: Optional. The category under which the action falls.
	description: Optional. A description of the action.

### Method: \`isSwitchOn(path)\`

Returns the current status of a switch defined in the service.

	path: The URL path for the switch.

### Method: \`defineSwitch(path, default_state, category)\`

Defines a switch that can be toggled through a GET request.

	path: The URL path for the switch.
	default_state: The default state of the switch.
	category: Optional. The category under which the switch falls.

### Method: \`defineCron(path, taskCallback, category)\`

Defines a cron task that can be executed through a GET request.

	path: The URL path for the cron task.
	taskCallback: The callback function to execute when the task is triggered.
	category: Optional. The category under which the task falls.

### Method: \`defineColor(path, category)\`

Defines a color setting that can be changed through a GET request.

	path: The URL path for the color setting.
	category: Optional. The category under which the color setting falls.

### Method: \`defineFileUpload(path, maxFileSize, filename, category)\`

Defines a file upload route with size and filename restrictions.

	path: The URL path for the file upload.
	maxFileSize: The maximum file size allowed for upload.
	filename: The filename to save the uploaded file as.
	category: Optional. The category under which the file upload falls.

### Method: \`defineLog(path, maxLines, category)\`

Defines a logging mechanism for a specified path.

	path: The URL path for the log.
	maxLines: Optional. The maximum number of lines to keep in the log file.
	category: Optional. The category under which the log falls.

### Method: \`appendLog(path, message)\`

Appends a message to a log file defined by the path.

	path: The URL path for the log.
	message: The message to append to the log.
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
