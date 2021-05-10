const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("../swagger.json");

const app = express();

// Middlewers
app.use(cors());
app.use(morgan());
app.use(helmet());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/api/v1", require("./routes/actors.routes"));
app.use("/api/v1", require("./routes/directors.routes"));
app.use("/api/v1", require("./routes/users.routes"));
app.use("/api/v1", require("./routes/login.routes"));

module.exports = app;
