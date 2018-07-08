package database


import (
	_ "github.com/lib/pq"
	"github.com/jinzhu/gorm"
)

func Connection() *gorm.DB {
	db, e :=  gorm.Open("postgres", "postgres://esteban:esteban@localhost:5432/hackathon?sslmode=disable")
	if e != nil{
		println("problem db null")
		return nil;
	}
	println("siii")
	return db;
}