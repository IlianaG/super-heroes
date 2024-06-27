import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Superhero } from '../types/Superhero';
import { useParams } from 'react-router-dom';


const SuperheroDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [superhero, setSuperhero] = useState<Superhero | null>(null);

  useEffect(() => {
    axios.get(`/api/superheroes/${id}`)
      .then(response => {
        setSuperhero(response.data);
      })
      .catch(error => {
        console.error('Error fetching superhero:', error);
      });
  }, [id]);

  if (!superhero) {
    return <div>Loading...</div>;
  }

  return (
      <div>

            <div className="row"> 
                <div className="col-xs-12" key='id'>
                    <div className="text-center">
                        <img src={superhero.images.md} className=" img-thumbnail" alt={superhero.name} />
                        <div className="card-body">
                            <p className="card-text">
                                <h2>{superhero.name}</h2>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    
          <div>
              <h2>Powerstats</h2>
              <table >
                  <thead>
                      <tr>
                          <th>Metric</th>
                          <th>Value</th>
                      </tr>
                  </thead>
                  <tbody>
                      {Object.entries(superhero.powerstats).map(([key, value]) => (
                          <tr key={key}>
                              <td>{key}</td>
                              <td>{value}</td>
                          </tr>
                      ))} </tbody>
              </table>
          </div>

          <div>
              <p></p>
              <h2>Appearance</h2>
              <table >
                  <tbody>
                      <tr>
                          <td><strong>Gender:</strong></td>
                          <td>{superhero.appearance.gender}</td>
                      </tr>
                      <tr>
                          <td><strong>Race:</strong></td>
                          <td>{superhero.appearance.race}</td>
                      </tr>
                      <tr>
                          <td><strong>Height:</strong></td>
                          <td>{superhero.appearance.height.join(', ')}</td>
                      </tr>
                      <tr>
                          <td><strong>Weight:</strong></td>
                          <td>{superhero.appearance.weight.join(', ')}</td>
                      </tr>
                      <tr>
                          <td><strong>Eye Color:</strong></td>
                          <td>{superhero.appearance.eyeColor}</td>
                      </tr>
                      <tr>
                          <td><strong>Hair Color:</strong></td>
                          <td>{superhero.appearance.hairColor}</td>
                      </tr>
                  </tbody>
              </table>

          </div>

          <div>
              <p></p>
              <h2>Biography</h2>
              <table >
                  <tbody>
                      <tr>
                          <td><strong>Full name:</strong></td>
                          <td>{superhero.biography.fullName}</td>
                      </tr>
                      <tr>
                          <td><strong>Alter egos:</strong></td>
                          <td>{superhero.biography.alterEgos}</td>
                      </tr>
                      <tr>
                          <td><strong>Aliases:</strong></td>
                          <td>{superhero.biography.aliases.join(', ')}</td>
                      </tr>
                      <tr>
                          <td><strong>Place of birth:</strong></td>
                          <td>{superhero.biography.placeOfBirth}</td>
                      </tr>
                      <tr>
                          <td><strong>First Appearance:</strong></td>
                          <td>{superhero.biography.firstAppearance}</td>
                      </tr>
                      <tr>
                          <td><strong>Publisher:</strong></td>
                          <td>{superhero.biography.publisher}</td>
                      </tr>
                      <tr>
                          <td><strong>Alignment:</strong></td>
                          <td>{superhero.biography.alignment}</td>
                      </tr>
                  </tbody>
              </table>
              <div>
                  <p></p>
                  <h2>Work</h2>
                  <table >
                      <tbody>
                          <tr>
                              <td><strong>Occupation:</strong></td>
                              <td>{superhero.work.occupation}</td>
                          </tr>
                          <tr>
                              <td><strong>Base:</strong></td>
                              <td>{superhero.work.base}</td>
                          </tr>
                      </tbody>
                  </table>

                  <p></p>
                  <h2>Connections</h2>
                  <table >
                      <tbody>
                          <tr>
                              <td><strong>Group affiliation:</strong></td>
                              <td>{superhero.connections.groupAffiliation}</td>
                          </tr>
                          <tr>
                              <td><strong>Relatives:</strong></td>
                              <td>{superhero.connections.relatives}</td>
                          </tr>
                      </tbody>
                  </table>

              </div>

          </div>

      </div>
  );
}
export default SuperheroDetail;