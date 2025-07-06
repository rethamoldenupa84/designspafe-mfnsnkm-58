// main.ts
import { serveDir } from "https://deno.land/std@0.224.0/http/file_server.ts";

serveDir({
  fsRoot: "./", // make sure your index.html is in this directory
  showDirListing: false,
});
