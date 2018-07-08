package scrapers

import (
	"os/exec"
)

func ExecutePythonScrap(name string) (error){
	c := exec.Command(name)
	err := c.Run()
	return err
}


