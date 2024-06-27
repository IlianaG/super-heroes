import { Powerstats } from './Powerstats';
import { Appearance } from './Appearance';
import { Biography } from './Biography';
import { Work } from './Work';
import { Connections } from './Connections';
import { Images } from './Images';


export interface Superhero {
  id: number;
  name: string;
  slug: string;
  powerstats: Powerstats;
  appearance: Appearance;
  biography: Biography;
  work: Work;
  connections: Connections;
  images: Images;
}
