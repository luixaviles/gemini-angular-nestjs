<p align="center">
    <a href="https://github.com/luixaviles/gemini-angular-nestjs">
        <img src="https://img.shields.io/github/stars/luixaviles/gemini-angular-nestjs.svg?style=social&label=Star" alt="GitHub stars">
    </a>
    <a href="https://clicktotweet.com/0pVg2">
        <img src="https://img.shields.io/twitter/url/https/github.com/luixaviles/gemini-angular-nestjs.svg?style=social" alt="Tweet">
    </a>
</p>

# A Chatbot Web Application using Angular, NestJS and the Gemini API

This project has been implemented entirely using the `TypeScript` language.

<img src="./images/gemini-angular-nestjs.png?raw=true">

## Blog Posts

1. [https://luixaviles.com/2024/03/build-gemini-chatbot-with-angular-and-nestjs/](https://luixaviles.com/2024/03/build-gemini-chatbot-with-angular-and-nestjs/). Start a project from scratch and generate an Nx-based workspace using Angular and NestJS. The web application support a multi-turn conversation(chatbot) and text generation using Gemini models.

1. [https://luixaviles.com/2024/03/using-gemini-pro-vision-image-processing-using-angular-nestjs/](https://luixaviles.com/2024/03/using-gemini-pro-vision-image-processing-using-angular-nestjs/). Add the Image processing ability to the existing application. It uses the Gemini Pro Vision Model.

## Features

This project currently supports:

- Multi-turn conversations (Chatbot application)
- Text Generation
- Image Processing

<img src="./images/gemini-vision-pro_angular-nestjs-app.png?raw=true">

## Support this project
- Star GitHub repository :star:
- Create pull requests, submit bugs or suggest new features
- Follow updates on [Twitter](https://twitter.com/luixaviles) or [Github](https://github.com/luixaviles)

## Running the Project Locally
First, ensure you have the following installed:

1. NodeJS - Download and Install latest version of Node: [NodeJS](https://nodejs.org)
2. Git - Download and Install [Git](https://git-scm.com)

After that, use `Git bash` to run all commands if you are on Windows platform.

### Clone repository
In order to start the project use:

```bash
$ git clone https://github.com/luixaviles/gemini-angular-nestjs.git
$ cd gemini-angular-nestjs
```
### Get an API Key from Google AI Studio

Go to the [Google AI Studio](https://aistudio.google.com/app/) website and generate an API Key.

Next, create an `.env` file under the `/server` directory with the API key value you generated(You'll find a `.env.example` file as an example there):

```txt
API_KEY=<Your API Key goes here>
```

### Preview the Application
This project is based on Nx tooling. If you don't have Nx installed, you can do so by using:

```bash
npm add --global nx@latest
```

Open other command line window and run following commands:

```bash
npm install
nx serve client && nx serve server
```

Then you will need to open your favorite web browser with the following URL: [http://localhost:4200](http://localhost:4200/)

## Forks
The Open Source community is awesome! If you're working in a fork with other tech stack, please add the reference of your project here.


## License
MIT
