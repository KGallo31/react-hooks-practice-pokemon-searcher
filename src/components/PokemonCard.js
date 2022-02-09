import React,{useState} from "react";
import { Card,} from "semantic-ui-react";

function PokemonCard({pokemans}) {
  const [side,setSide] = useState(true)

  const changeSide = () => setSide(!side)

  return (
    <Card>
      <div>
        <div className="image">
          <img onClick={changeSide} src={side? pokemans.sprites.front: pokemans.sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{pokemans.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemans.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
