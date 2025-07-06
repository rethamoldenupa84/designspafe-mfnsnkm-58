// main.ts
import { serveDir } from "https://deno.land/std@0.224.0/http/file_server.ts";

serveDir({
  fsRoot: "./", // Serves from the root of your project
  showDirListing: false,
});
