package main

import (
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/jackkieny/personal-portfolio/routes"
	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
)

func main() {
	log.Logger = log.Output(zerolog.ConsoleWriter{Out: os.Stderr, TimeFormat: time.ANSIC})

	app := fiber.New()

	routes.Setup(app)

	log.Info().Msg("Starting server...")
	if err := app.Listen(":5000"); err != nil {
		log.Fatal().Msgf("Error starting server: %s", err)
	}
}
