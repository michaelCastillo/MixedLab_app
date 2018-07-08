package services

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"../entities"
	"../database"
)

func PreciosProductosCRUD(routes *gin.Engine){
	routes.GET("/precioProducto/:id", PreciosProductosReadById)
	routes.GET("/precioProductoId/:idProducto", PreciosProductosByProducto)
	//routes.GET("/producto/condicion/:condicionId", ProductoReadByCondicion)
	routes.GET("/precioProducto/", PreciosProductosReadAll)

	/*routes.POST("/location/", LocationCreate)
	routes.PUT("/location/:id", LocationEdit)
	routes.DELETE("/location/:id", LocationDelete)*/
}

func PreciosProductosByProducto(c *gin.Context){
	idProducto := c.Param("idProducto")
	var precioProductos []entities.PreciosProductos


	db := database.Connection()
	defer db.Close()


	if err := db.Where("producto_id = ?", idProducto).Find(&precioProductos).Error; err!= nil {
		c.String(http.StatusNotFound, err.Error())
	}else {
		for i := range precioProductos {
			db.Model(&precioProductos[i]).Related(&precioProductos[i].Producto, "ProductoId")
			db.Model(&precioProductos[i]).Related(&precioProductos[i].Empresa, "EmpresaId")
		}
		c.JSON(http.StatusCreated, precioProductos)
	}
}

func PreciosProductosReadById(c *gin.Context){
	id := c.Param("id")
	var precioProducto entities.PreciosProductos


	db := database.Connection()
	defer db.Close()

	if err := db.Find(&precioProducto, id).Error; err!= nil {
		c.String(http.StatusNotFound, err.Error())
	}else {
		db.Model(&precioProducto).Related(&precioProducto.Empresa, "EmpresaId")
		db.Model(&precioProducto).Related(&precioProducto.Producto, "ProductoId")
		c.JSON(http.StatusCreated, precioProducto)
	}
}


func PreciosProductosReadAll(c *gin.Context) {

	db := database.Connection()
	defer db.Close()

	var precioProductos []entities.PreciosProductos
	if err := db.Find(&precioProductos).Error; err != nil {
		c.String(http.StatusNotFound, err.Error())
	} else {
		for i := range precioProductos {
			db.Model(&precioProductos[i]).Related(&precioProductos[i].Producto, "ProductoId")
			db.Model(&precioProductos[i]).Related(&precioProductos[i].Empresa, "EmpresaId")
		}
		c.JSON(http.StatusOK, precioProductos)
	}
}
