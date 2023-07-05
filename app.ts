import { App } from "./startup";


new App().server.listen(process.env.PORT || 3000, () => console.log('Servidor Online'))