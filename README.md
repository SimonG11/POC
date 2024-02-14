## Compose sample application

### Use with Docker Development Environments

Här är en mall för typ en 3 lagrig app med proxy funkar i docker. du behöver bara köra komanot och ha docker ndeladdat. se till att du är i rätt mapp när du kör. dvs "/simon"

### Python/Flask with Nginx proxy and MySQL database

Project structure:
```
.
├── docker-compose.yaml
├── backend
│   ├── Dockerfile
│   ├── requirements.txt
│   └── hello.py
├── frontend
│   ├── Dockerfile
│   ├── node_modeules/ #oviktiga men ska finnas
│   ├── public/ #oviktiga men ska finnas
│   ├── src/
        ├──  App.jsx   # ReactJS 
        ├── index.html # HTML
        └── index.js   # JavaScript
│   └── package.json # här måste man manuellt lägga in alla dependncys eftersom vi använder docker
├── db
│   ├── setup.sql
│   ├── password.txt
└── proxy
    └── conf
    └── Dockerfile


```
## Deploy with docker compose

```
$ docker compose up --build

```

## Expected result
```

 ✔ Network simon_frontnet      Created                                                                                                                                                         0.0s 
 ✔ Network simon_backnet       Created                                                                                                                                                         0.0s 
 ✔ Container simon-db-1        Created                                                                                                                                                         0.1s 
 ✔ Container simon-backend-1   Created                                                                                                                                                         0.0s 
 ✔ Container simon-frontend-1  Created                                                                                                                                                         0.0s 
 ✔ Container simon-proxy-1     Created  

```
## Stop and remove the containers
```
$ docker compose down
```
