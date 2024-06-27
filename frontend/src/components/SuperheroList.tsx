import React from 'react';
import { Superhero } from '../types/Superhero';

interface Props {
    superheroes: Superhero[];
}

const SuperheroList: React.FC<Props> = ({superheroes}) => {

    if (!superheroes || superheroes.length === 0) {
        return <div className="alert alert-warning" role="alert">
            No superheroes found!
        </div>
    }

  return (
    <div>
      <div className='row'>
          {superheroes.map(hero => (
          <div className="col-sm-6 col-md-4" key={hero.id}>
            <div className="thumbnail text-center">
                <div className="hover01 column" style={{padding: '.5rem 0rem'}}>
                    <figure><img src={hero.images.sm} className="rounded" alt="..."/></figure>
                    <div className="caption">
                        <h3>{hero.name}</h3>
                        <p>
                            <a href={`/superheroes/${hero.id}`} className="btn btn-primary" role="button">View detail</a>
                        </p>
                    </div>
                </div>
            </div>
          </div>
          ))}
      </div>
    </div>


  );
}

export default SuperheroList;