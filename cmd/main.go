package main

import (
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
)

func SetupServer(app *fiber.App) {
	app.Static("/", "./frontend/dist")

	app.Get("/*", func(c *fiber.Ctx) error {
		/*** CHANGE ME BEFORE PRODUCTION ***/
		// return c.SendString("Hello, World!")
		return c.SendFile("./fe/index.html")
	})
}

func main() {
	log.Logger = log.Output(zerolog.ConsoleWriter{Out: os.Stderr, TimeFormat: time.ANSIC})

	app := fiber.New()

	SetupServer(app)

	log.Info().Msg("Starting server...")
	if err := app.Listen(":5000"); err != nil {
		log.Fatal().Msgf("Error starting server: %s", err)
	}
}
