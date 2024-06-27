import express, {Request, Response} from 'express';
import { Superhero } from '../types/Superhero';

const router = express.Router();

const superheroes: Superhero[] = require('../data/superheroes.json');

const validateIdParam = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const id = req.params.id;
    if (!/^\d+$/.test(id)) {
        console.log('Error parsing input:' + id);
      return res.status(400).send('Invalid ID parameter. ID must be a number.');
    }
    next();
};

router.get('/', (req: Request, res: Response) => {
    res.send('APIs for superheroes');
});

router.get('/superheroes', (req: Request, res: Response) => {
    res.json(superheroes);
});

router.get('/superheroes/:id', validateIdParam, (req: Request, res: Response) => {
    const idRequested = parseInt(req.params.id, 10);
    console.log('Looking for the superhero with id:' + idRequested);

    const superhero = superheroes.find(heroe => heroe.id === idRequested);

    if(superhero){
        res.json(superhero);
    }else{
        res.status(404).send('Superhero not found');
    }
});

export default router;