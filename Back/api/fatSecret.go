package api

import (
	"github.com/wfreeman/fatsecret"
)

const APIKEY  = "1d0d020261f04811b23c488b396aa1d6"
const SECRET  = "94465cf3020a4a8e981ec75a335a4003"


func SearchFood(food string) ([]fatsecret.Food, error){
	var foods []fatsecret.Food
	fs, err := fatsecret.Connect(APIKEY, SECRET)
	if err != nil {
		return foods, err
	}

	foods, err = fs.FoodSearch(food)
	if err != nil {
		return foods, err
	}

	return foods, err
}
