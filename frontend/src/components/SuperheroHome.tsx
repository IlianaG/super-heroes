import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Superhero } from '../types/Superhero';
import SuperheroList from './SuperheroList';

const SuperheroHome: React.FC = () => {
  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);

  useEffect(() => {
    axios.get('/api/superheroes')
      .then(response => {
        setSuperheroes(response.data);
      })
      .catch(error => {
        console.error('Error fetching superheroes:', error);
      });
  }, []);

  function filterSuperheroes(superheroes: Superhero[], search: String): Superhero[]{
    if(search){
      const searchLowercase = search.toLocaleLowerCase();
      return superheroes.filter(hero => hero.name.toLocaleLowerCase().includes(searchLowercase));
    }else{
      return superheroes;
    }
  }

  const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
    setSearchText(event?.currentTarget?.value);
  }

  const [searchText, setSearchText] = useState('');
  const filteredSuperheroes  = filterSuperheroes(superheroes, searchText);

  return (
    <div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                <div className="input-group">
                  <input type="text" value={searchText} onChange={handleChange} className="form-control" placeholder="Search superhero..."/>
                </div>
              </div>
            </div>
          </div>
          <div className="b-example-divider"></div>
        </div>
        <p>
        </p>
        
        <SuperheroList
          superheroes={filteredSuperheroes} />
    </div>
  );
}

export default SuperheroHome;