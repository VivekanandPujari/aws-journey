# Fortune Teller App

A simple serverless Magic 8-Ball style app built with AWS Lambda, API Gateway, and a static frontend.

## Features

- Ask any question
- Get random answers like Yes, No, or Maybe
- Serverless backend using AWS Lambda
- Public API using API Gateway
- Frontend hosted as a static website

## Tech Stack

- AWS Lambda
- Amazon API Gateway
- HTML, CSS, JavaScript
- GitHub

## How It Works

1. User enters a question on the website.
2. Frontend sends request to API Gateway.
3. API Gateway triggers Lambda.
4. Lambda returns a random fortune answer.
5. Website displays the answer.

## Project Structure

```text
fortune-teller-app/
├── index.html
└── README.md