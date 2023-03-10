import app from "./app";
import { environment } from "./app";
import connectDB from "./db";

const PORT = environment.PORT || 4000;

connectDB(false).then(() => {
  app.listen(PORT, (): void => console.log(`running on port ${PORT}`));
})
  .catch((error: any) => console.error(error)
  );
