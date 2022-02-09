import React,{useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addNewPoke}) {

  const [name,setName] = useState('')
  const [hp,setHp] = useState('')
  const [frontImg,setFrontImg] = useState('')
  const [backImg,setBackImg] = useState('')

  const placePoke = (e) => {
    e.preventDefault()
    const newPoke = {
      name:name,
      hp:hp,
      sprites:{
        front:frontImg,
        back:backImg
      }
    }
    fetch('http://localhost:3001/pokemon',{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPoke)
    }).then(r=>r.json()).then(addingPoke => addNewPoke(addingPoke))
  }



  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={placePoke}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={(e) => setName(e.target.value)} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp"  onChange={(e) => setHp(e.target.value)} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={(e) => setFrontImg(e.target.value)} 
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={(e) => setBackImg(e.target.value)} 
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
