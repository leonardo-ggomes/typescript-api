"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const startup_1 = require("./startup");
new startup_1.App().server.listen(process.env.PORT || 3000, () => console.log('Servidor Online'));
