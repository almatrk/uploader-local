# uploader-local


### Commands

Building and starting up containers:
```
docker compose up --build -d
```

Stop service and erase volumes:
```
docker compose down --volumes
```

Copy files:
```
docker cp vision_success_2.json vision-mock:/app/vision_success_2.json
```