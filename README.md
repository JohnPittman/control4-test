# Usage

*   Open a terminal in the project directory.

## Start

### Development

#### Node

[Install](https://nodejs.org) nodejs.

```
$ npm i
$ npm run start-local:dev
```

#### Docker

[Install](https://www.docker.com/community-edition) Docker.

```
$ docker-compose -f docker-compose.dev.yml up --build
```

## View

[Open](http://localhost:4444)

# The Task

## Challenge Summary

Write a simple UI that displays weather information in a list from a hard-coded set of cities. Selecting an item in the list presents a detailed view of the city’s weather. There is no time limit for this challenge, however, it should take you about 2-3 hours to complete. If you have any questions, please contact your recruiter or Control4 representative.

## Specification:

Each list item should display:

*   Weather Icon
*   City Name
*   Current temperature

## Detail page should display:

*   City Name
*   Weather icon
*   Current temperature
*   Hi and Low temperature for the day
*   Chance of precipitation - Note: Unavailable from current API (04/29/2018)
*   Any other information you find relevant. (Optional)

## Hard-coded cities:

*   San Francisco, CA
*   New York, NY
*   Salt Lake City, UT

### Bonus

*   Provide the capability to add cities to the hard-coded list.
*   Provide the capability to remove cities from the hard-coded list.

# Weather API

*   API Documentation: http://openweathermap.org/api
*   Weather Conditions: http://openweathermap.org/weather-conditions
*   Weather Icon API: http://openweathermap.org/img/w/[ICON ID].png
*   API Key: da65fafb6cb9242168b7724fb5ab75e7

# Deliverable

Provide all relevant projects, source code, and documentation to allow for a proper execution and demonstration of your UI to your recruiter or Control4 representative.

\*Remember that all code must be your own.
