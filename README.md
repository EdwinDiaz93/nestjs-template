<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

1. Clonar el proyecto

```
  git clone https://github.com/EdwinDiaz93/nestjs-template.git
```
2. Ingresar al proyecto y ejecutar

```
  yarn install
```

3.  Clonar el archivo ```.env.example``` y renombrarlo a ```.env```

4. cambiar las variables de entorno

5. levantar la base de datos
```
  docker-compose up -d
```
6. Levantar el proyecto
```
   yarn start:dev
```
7. llamar el siguiente endopint para poblar la base de datos
```
  http://localhost:3000/api/v1/seed
```
