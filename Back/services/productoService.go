package services

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"../entities"
	"../database"
	"github.com/estebanalarcon/fentrenSalud/api"
)

func ProductoCRUD(routes *gin.Engine){
	routes.GET("/producto/:id", ProductoReadById)
	//routes.GET("/producto/condicion/:condicionId", ProductoReadByCondicion)
	routes.GET("/producto/", ProductoReadAll)
	routes.GET("/fatsecret/:food", SearchFatSecret)

	/*routes.POST("/location/", LocationCreate)
	routes.PUT("/location/:id", LocationEdit)
	routes.DELETE("/location/:id", LocationDelete)*/
}

func SearchFatSecret(c *gin.Context){
	name := c.Param("food")

	foods, err := api.SearchFood(name)
	if (err != nil){
		c.String(http.StatusNotFound, err.Error())
	}else{
		c.JSON(http.StatusOK, foods)
	}
}

func ProductoReadById(c *gin.Context){
	id := c.Param("id")
	var producto entities.Producto


	db := database.Connection()
	defer db.Close()

	if err := db.Find(&producto, id).Error; err!= nil {
		c.String(http.StatusNotFound, err.Error())
	}else {
		c.JSON(http.StatusCreated, producto)
	}
}

func ProductoReadByCondicion(c *gin.Context){
	id := c.Param("condicionId")
	var producto entities.Producto


	db := database.Connection()
	defer db.Close()

	if err := db.Find(&producto, id).Error; err!= nil {
		c.String(http.StatusNotFound, err.Error())
	}else {
		c.JSON(http.StatusCreated, producto)
	}
}

func ProductoReadAll(c *gin.Context) {

	db := database.Connection()
	defer db.Close()

	var productos []entities.Producto
	if err := db.Find(&productos).Error; err != nil {
		c.String(http.StatusNotFound, err.Error())
	} else {

		c.JSON(http.StatusOK, productos)
	}
}