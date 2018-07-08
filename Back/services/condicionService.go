package services


import (
	"github.com/gin-gonic/gin"
	"net/http"
	"../database"
	"../entities"
)

func CondicionCRUD(routes *gin.Engine){
	routes.GET("/condicion/:id", CondicionReadById)
	routes.GET("/condicion/", CondicionReadAll)
}

func CondicionReadById(c *gin.Context) {
	id := c.Param("id")

	db := database.Connection()
	defer db.Close()

	var condicion entities.Condicion

	if err := db.Find(&condicion, id).Error; err != nil {
		c.String(http.StatusNotFound, err.Error())
	} else {
		db.Model(&condicion).Related(&condicion.Productos, "Productos")
		c.JSON(http.StatusOK, condicion)
	}
}

func CondicionReadAll(c *gin.Context) {

	db := database.Connection()
	defer db.Close()

	var condiciones []entities.Condicion
	if err := db.Find(&condiciones).Error; err != nil {
		c.String(http.StatusNotFound, err.Error())
	} else {
		for i := range condiciones {
			db.Model(&condiciones[i]).Related(&condiciones[i].Productos, "Productos")
		}
		c.JSON(http.StatusOK, condiciones)
	}
}