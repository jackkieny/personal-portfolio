# Build the frontend
FROM node:23.1 AS frontend-build
WORKDIR /app/frontend
COPY ./frontend/package*.json ./
RUN npm install
COPY ./frontend .
RUN npm run build

# Build the backend
FROM golang:1.23.1 AS go-build
WORKDIR /app
COPY . .
RUN go mod download
COPY --from=frontend-build /app/frontend/dist ./frontend/dist
RUN CGO_ENABLED=0 GOOS=linux go build -o /app/main ./cmd

# Run app
FROM golang:1.23.1
WORKDIR /app
COPY --from=go-build /app/main .
COPY --from=go-build /app/frontend/dist ./frontend/dist
EXPOSE 5000
CMD ["./main"]