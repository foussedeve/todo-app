
import { useState } from "react";
import ProfileInfo from "./profil-info";
import FormTodo from "./todo/FormTodo";
import ListTodo from "./todo/ListTodo";


function App() {
  const [taches, setTaches] = useState([]);
  const handlerTaches = (tache) => {
    setTaches([tache, ...taches])
  }
  const handlerSuppTache = (index) => {
    let newTaches = [];
    for (let key in taches) {
      if (key != index) {
        newTaches.push(taches[key]);
      }
    }

    
    setTaches(newTaches);
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-4">
          <ProfileInfo nbr={taches?.length} />

        </div>
        <div className="col-12 col-md-8">
          <FormTodo onHandlerTaches={handlerTaches} />
          <ListTodo taches={taches} onHandlerSupp={handlerSuppTache} />
        </div>
      </div>



    </div>


  );
}

export default App;
