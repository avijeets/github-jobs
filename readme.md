# GitHub Jobs Explorer

Job Explorer utilizes [GitHub's Jobs API](http://jobs.github.com/api) to let you browse job openings that cater to your technology and location needs. 

## Introduction

This project aims to be lightweight while simply parsing and displaying JSON objects coming from GitHub's Jobs API. The application requests the data with a GET request after submitting location and description search parameters. If no parameters are set, the application will display every job posting.

The project architecture is very straightforward and built with:
- Node.js
- Express.js
- EJS for templating
- Bootstrap for design components 
- Request for requesting HTTP data

## Usage

Clone the project:
```
git clone https://github.com/avijeets/github-jobs
```

Then, go into the project directory and download its dependencies:
```
cd github-jobs && npm install
```

Lastly, run the project:
```
npm start
``` 

Head over to http://localhost:3005 where the project should be running!

## TODO: 

Through building this application, I noticed there were some features that could make the application feel impersonal. However, it would be worth the time to explore solutions to the given problems:

- Formatted date handling. As of right now, the date is being displayed as received from the Jobs API, but it would be great to add a library to make the date/time appear more personal

- Better handle the HTML strings brought in from the API. The `description` and `how_to_apply` properties in the JSON objects include HTML in them which can make the design look inconsistent if it overrides the container design. It would be smarter to build the system to handle those extreme cases

- Implement better description search. For example, a search for an iOS role will yield results with "curiosity" and "scenarios" in their given description although the role isn't geared around that technology

- Save for later function. It would definitely be helpful to add in a capability for users to save job postings for later or add in share functionality so they could direct the posting to someone else
