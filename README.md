# Test Node JS microservice app with docker
Test using Docker to build microservice.

## Start
```
$ docker-compose build
$ docker-compose up
```

##Use:

<b>Docker Gateway (alias http://localhost:80)</b>
- server configuration to get all docker container available from `localhost:80`. Default docker link to `http://localhost:80`: Docker front

<b>Docker front (alias http://localhost:8000/)</b>
- `localhost` to view JS frontend application

<b>Docker server (alias http://localhost:3000)</b>
- `localhost/server` to view server entry point
- `localhost/server/random-color` entry point to get data from `colorapi microservice`

<b>Docker colorapi (alias http://localhost:3002)</b>
- `localhost/colorapi` to view colorapi entry point
- `localhost/colorapi/random-color` entry point to get data from `http://www.colr.org/json/color/random`
