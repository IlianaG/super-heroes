import app from "./app";

const PORT: Number = 4000;

app.listen(PORT, (): void => console.log(`running on port ${PORT}`));
