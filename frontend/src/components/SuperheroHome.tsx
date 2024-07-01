import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Superhero } from '../types/Superhero';
import SuperheroList from './SuperheroList';

const SuperheroHome: React.FC = () => {
  const [superheroes, setSuperheroes] = useState<Superhero[] | null>(null);

  useEffect(() => {
    axios.get('/api/superheroes')
      .then(response => {
        setSuperheroes(response.data);
      })
      .catch(error => {
        console.error('Error fetching superheroes:', error);
      });
  }, []);

  function filterSuperheroesByName(superheroes: Superhero[] | null, search: String): Superhero[]{
    if(superheroes && search){
      const searchLowercase = search.toLocaleLowerCase();
      return superheroes.filter(hero => hero.name.toLocaleLowerCase().includes(searchLowercase));
    } else if(superheroes){
      return superheroes;
    }else{
      return [] as Superhero[];
    }
  }

  function filterSuperheroesByGender(appearance: Superhero[] | null, gender:String): Superhero[]{
    if(superheroes && gender){
      if(gender === "All"){
        return superheroes;
      }else{
        return superheroes.filter(hero => hero.appearance.gender === gender);
      }
    } else if(superheroes){
      return superheroes;
    }else{
      return [] as Superhero[];
    }
  }

  const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
    setSearchText(event?.currentTarget?.value);
  }

  const [searchText, setSearchText] = useState('');
  const filteredSuperheroes  = filterSuperheroesByName(superheroes, searchText);

  const [genderSelect, setGenderSelect] = useState('');
  const filteredSuperheroesGender  = filterSuperheroesByGender(superheroes, genderSelect);

  const handleGenderSelect = (event: React.ChangeEvent<{ value: string }>)=>{
    setGenderSelect(event?.target?.value);

}
console.log("Selected Gender");
console.log(genderSelect);

  if(!superheroes){
    return <div>Loading...</div>
  }

  return (
    <div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                <div className="input-group">
                  <input type="text" value={searchText} onChange={handleChange} className="form-control" placeholder="Search superhero..."/>
                </div>


              <select className="form-select" defaultValue='All' onChange={handleGenderSelect}>
                <option value="All">All Genders</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              </div>
            </div>

          </div>
          <div className="b-example-divider"></div>
        </div>
        <p>
        </p>
        
        <SuperheroList
          superheroes={filteredSuperheroesGender} />
    </div>
  );
}

export default SuperheroHome;