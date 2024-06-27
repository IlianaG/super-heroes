import express, {Request, Response} from 'express';
import path from 'path';
import superheroRoutes from './routes/superheroes';

const app = express();

//const port: number = 4000;

app.use('/api', superheroRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../../frontend/build')));

// Catch-all handler for any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

//app.listen(port, () => {
//    console.log(`Server is running on http://localhost:${port}`);
//});

export default app;