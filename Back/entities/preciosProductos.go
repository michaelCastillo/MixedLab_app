package entities

type PreciosProductos struct {
	Id          uint   `gorm:"primary_key"`
	Monto       int `gorm:"column:monto;not null;" json:"monto"`
	EmpresaId		   int		`gorm:"column:empresa_id;not null;" json:"empresa_id"`
	Empresa            Empresa   `gorm:"ForeignKey:EmpresaId;AssociationForeignKey:Id"`
	ProductoId		   int		`gorm:"column:producto_id;not null;" json:"producto_id"`
	Producto            Producto   `gorm:"ForeignKey:ProductoId;AssociationForeignKey:Id"`
	Url  			string   `gorm:"column:url;" json:"url"`
}

