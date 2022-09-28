const pokemonCount = 30;
var pokedex = {}; // {1 : {"name" : "bulbsaur", "img" : url, "type" : ["grass", "poison"], "desc" : "...."} }

window.onload = async function() {
    // getPokemon(1);
    for (let i = 1; i <= pokemonCount; i++) {
        await getPokemon(i);
        //<div id="1" class="pokemon-name">BULBASAUR</div>

        let pokemon = document.createElement("div");
        pokemon.id = i;
        pokemon.classList.add("test");
        pokemon.innerHTML = `
        <div class="test">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-1">
      
          <!-- card -->
          <div class="col my-3" ng-for=>
            <div class="card grassGround">
              <!-- header -->
              <div class="p-3" >
                <!-- Nome e tipo -->
                <div class="col mx-auto text-center">
                  <div class="row g-1">
                    <div class="col-12 text-center h3 p-2 fw-bolder">Bulbasaur</div>
                    <div class="col types grass m-1">Grass</div>
                    <div class="col types grass m-1">Poison</div>
                  </div>
                </div>
      
                <!-- id -->
                <div class="col-3 my-auto text-end fw-light">#001</div>
      
              </div>
      
              <!-- body card -->
              <div class="row mx-0 px-0">
                <div class="col" style="height: 10rem; width: 100%;">
                  <img src="${pokedex[i]["img"]}" style="width: 12rem; position: absolute; margin-left: auto; margin-right: auto; left: 0; right: 0;" alt="">
                </div>
                <!-- content -->
                <div class="col-12 p-2ol text-center cardGame">
                  <!-- Menu -->
                  <nav class="my-3">
                    <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                      <button class="nav-link active p-1 " id="nav-about-tab${i}" data-bs-toggle="tab" data-bs-target="#nav-about${i}" type="button" role="tab" aria-controls="nav-about" aria-selected="true"> About </button>
                      <button class="nav-link p-1 m-1" id="nav-stats-tab${i}" data-bs-toggle="tab" data-bs-target="#nav-stats${i}" type="button" role="tab" aria-controls="nav-stats" aria-selected="true"> Base Stats </button>
                      <button class="nav-link p-1 m-1" id="nav-evoulution-tab${i}" data-bs-toggle="tab" data-bs-target="#nav-evoulution${i}" type="button" role="tab" aria-controls="nav-evoulution${i}" aria-selected="true"> Evolution </button>
                      <button class="nav-link p-1" id="nav-moves-tab${i}" data-bs-toggle="tab" data-bs-target="#nav-moves${i}" type="button" role="tab" aria-controls="nav-moves" aria-selected="true"> Moves </button>
      
                    </div>
                  </nav>
      
                  <!-- info -->
                  <div class="tab-content" id="nav-tabContent">
                    <!-- About -->
                    <div class="tab-pane fade show active" id="nav-about${i}" role="tabpanel" aria-labelledby="nav-home-tab${i}">
      
                      <table class="table table-borderless m-1">
                        <tr>
                          <th class="text-muted" style="width: 100px;">Species</th>
                          <td class="fw-bold">Seed</td>
                        </tr>
                        <tr>
                          <th class="text-muted">Height</th>
                          <td class="fw-bold">2'3,6" (0.70 cm)</td>
                        </tr>
                        <tr>
                          <th class="text-muted">Weight</th>
                          <td class="fw-bold">12.2 lbs (6.9 kg)</td>
                        </tr>
                        <tr>
                          <th class="text-muted">Abilities</th>
                          <td class="fw-bold">Obergrow, chlorophyl</td>
                        </tr>
                      </table>
      
      
                    </div>
      
                    <!-- BASE STATS -->
                    <div class="tab-pane fade" id="nav-stats${i}" role="tabpanel" aria-labelledby="nav-stats-tab${i}">
                      <table class="table table-borderless m-1">
                        <tr>
                          <th class="text-muted" style="width: 50px;">HP</th>
                          <td style="width: 50px; text-align: right;">25</td>
                          <td>
                            <div class="progress my-2" style="height: 8px;">
                              <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </td>
                        </tr>
      
                        <tr>
                          <th class="text-muted" style="width: 50px;">Attack</th>
                          <td style="width: 50px; text-align: right;">25</td>
                          <td>
                            <div class="progress my-2" style="height: 8px;">
                              <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th class="text-muted" style="width: 50px;">Defense</th>
                          <td style="width: 50px; text-align: right;">25</td>
                          <td>
                            <div class="progress my-2" style="height: 8px;">
                              <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th class="text-muted" style="width: 50px;">Sp. Atk</th>
                          <td style="width: 50px; text-align: right;">25</td>
                          <td>
                            <div class="progress my-2" style="height: 8px;">
                              <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th class="text-muted" style="width: 50px;">Sp. Def</th>
                          <td style="width: 50px; text-align: right;">25</td>
                          <td>
                            <div class="progress my-2" style="height: 8px;">
                              <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th class="text-muted" style="width: 50px;">Speed</th>
                          <td style="width: 50px; text-align: right;">25</td>
                          <td>
                            <div class="progress my-2" style="height: 8px;">
                              <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th class="text-muted" style="width: 50px;">Total</th>
                          <td style="width: 50px; text-align: right;">25</td>
                          <td>
                            <div class="progress my-2" style="height: 8px;">
                              <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </td>
                        </tr>
      
                      </table>
                    </div>
      
                    <div class="tab-pane fade" id="nav-evoulution${i}" role="tabpanel" aria-labelledby="nav-evoulution-tab${i}">
                      <p class="h4">Evolution Chain</p>
                      <div class="row p-4">
                        <div class="col-5">
                          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" style="width: 6rem;" alt="">
                        </div>
                        <div class="col-2 my-auto">></div>
                        <div class="col-5">
                          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png" style="width: 6rem;" alt="">
                          
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="nav-moves${i}" role="tabpanel" aria-labelledby="nav-moves-tab${i}">
                      <span class="badge rounded-pill bg-secondary">Secondary</span>
                      <span class="badge rounded-pill bg-secondary">Secondary</span>
                      <span class="badge rounded-pill bg-secondary">Secondary</span>
                      <span class="badge rounded-pill bg-secondary">Secondary</span>    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- fim card -->
        </div>
      </div>
  `;

        pokemon.addEventListener("click", updatePokemon);
        document.getElementById("pokemon-list").append(pokemon);
    }

    document.getElementById("pokemon-description").innerText = pokedex[1]["desc"];

    console.log(pokedex);
}



async function getPokemon(num) {
    let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString();

    let res = await fetch(url);
    let pokemon = await res.json();
    // console.log(pokemon);

    let pokemonName = pokemon["name"];
    let pokemonType = pokemon["types"];
    let pokemonImg = pokemon["sprites"]["front_shiny"];

    res = await fetch(pokemon["species"]["url"]);
    let pokemonDesc = await res.json();

    pokemonDesc = pokemonDesc["flavor_text_entries"][32]["flavor_text"];

    pokedex[num] = {"name" : pokemonName, "img" : pokemonImg, "types" : pokemonType, "desc" : pokemonDesc};

}

function updatePokemon(){
    document.getElementById("pokemon-img").src = pokedex[this.id]["img"];

    //clear previous type
    let typesDiv = document.getElementById("pokemon-types");
    while (typesDiv.firstChild) {
        typesDiv.firstChild.remove();
    }

    //update types
    let types = pokedex[this.id]["types"];
    for (let i = 0; i < types.length; i++) {
        let type = document.createElement("span");
        type.innerText = types[i]["type"]["name"].toUpperCase();
        type.classList.add("type-box");
        type.classList.add(types[i]["type"]["name"]); //adds background color and font color
        typesDiv.append(type);
    }

    //update description
    document.getElementById("pokemon-description").innerText = pokedex[this.id]["desc"];
}