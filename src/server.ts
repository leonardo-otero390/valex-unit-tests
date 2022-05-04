import "./setup.ts";
import app from "./app.js";

app.listen(process.env.PORT, () => {
  console.log(
    `Running on port ${process.env.PORT} on ${process.env.NODE_ENV} mode`
  );
});
