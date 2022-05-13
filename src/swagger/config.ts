export const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "ulventech API",
            version: "0.1.0",
            description: "ulventech API",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html"
            },
            contact: {
                name: "Tuan Duong",
                email: "jupiterdev@gmail.com"
            }
        },
        servers: [
            { url: "http://localhost:5000/" }
        ],
        security: {
            app_id: []
        }
    },
    apis: ["src/swagger/schemas/*.yaml", "src/swagger/*.yaml"]
}
