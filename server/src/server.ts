import { app, PORT } from "./main";

app.listen(PORT, () =>
	console.log(`Server is runnit on port localhost:${PORT}`),
);
