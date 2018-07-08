package entities

type CondicionesProductos struct {
	//	gorm.Model
	Id      			uint   `gorm:"primary_key"`
	Condicion_id 		int `gorm:"column:condicion_id;not null;" json:"condicion_id"`
	Condicion            Condicion   `gorm:"ForeignKey:Condicion_id;AssociationForeignKey:Id"`
	Producto_id		  	 int		`gorm:"column:producto_id;not null;" json:"producto_id"`
	Producto            Producto   `gorm:"ForeignKey:Producto_id;AssociationForeignKey:Id"`
}

