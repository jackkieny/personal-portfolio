package routes

import "github.com/gofiber/fiber/v2"

func Setup(app *fiber.App) {
	app.Static("/", "./frontend/dist")

	app.Get("/*", func(c *fiber.Ctx) error {
		/*** CHANGE ME BEFORE PRODUCTION ***/
		return c.SendString("Hello, World!")
		// return c.SendFile("./fe/index.html")
	})
}
