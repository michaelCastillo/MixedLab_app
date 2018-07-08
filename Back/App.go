package main

import (
	_ "github.com/lib/pq"
	"github.com/gin-gonic/gin"
	"./services"
	"github.com/gin-contrib/cors"
)
func main() {
	r := gin.Default()
	r.Use(cors.Default())
	services.ProductoCRUD(r)
	services.PreciosProductosCRUD(r)
	services.CondicionCRUD(r)
	r.Run(":3000") // listen and serve on 0.0.0.0:3000

}




/*
rdbms: postgres
user: voluntarios
pass: 12345
ip: localhost
port: 5433
name: coordinacion_voluntarios
sslmode: disable
gorm.Open(rdbms, rdbms+"://"+user+":"+pass+"@"+ip+":"+port+"/"+database+"?sslmode="+sslmode)*/