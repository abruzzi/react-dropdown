import { createServer, Response } from "miragejs";
import users from "./users.json";

export function makeServer({ environment = "development" } = {}) {
  return createServer({
    environment,

    routes() {
      this.namespace = "api";

      this.get(
        "https://gist.githubusercontent.com/abruzzi/3dcb7424d635817b2de9323469dfdca3/raw/72a7ce509ebf3fc19982db1f00d95d8aef80dbc9/users.json",
        (schema, request) => {
          return new Response(500, {}, { error: "An error occurred on the server." });
          // return users;
        },
        { timing: 2000 }
      );
    },
  });
}
