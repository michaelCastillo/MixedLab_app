package entities

type Producto struct {
	Id      uint   `gorm:"primary_key"`
	Nombre string `gorm:"column:nombre;not null;" json:"nombre"`
}
