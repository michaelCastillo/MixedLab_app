package entities

type Condicion struct {
	//	gorm.Model
	Id      uint   `gorm:"primary_key"`
	Nombre string `gorm:"column:nombre;not null;" json:"nombre"`
	Productos []Producto `gorm:"many2many:condiciones_productos;"`
}

