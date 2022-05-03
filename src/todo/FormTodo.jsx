import { useState } from "react";

// champ formulaire Date debut, date fin description 


const FormTodo = (props) => {
  const [tache,setTache]=useState({debut:"",fin:"",description:""});
  const [valideDate,setValideDate]=useState(true);
  const [errorMessage, setErrorMessage]=useState();
  const handlerChange=(e)=>{
    e.preventDefault();
    
    let name=e.target.name;
    let value=e.target.value;
    setTache({...tache,
          [name]:value
     });
     
  }

  const handlerSubmit=(e)=>{
    e.preventDefault();
    console.log("Model Todo value = ",tache)
    let dateDiff=new Date(tache.fin)-new Date(tache.debut);
    
     if(dateDiff<1 ){
       
      setValideDate(false);
      setErrorMessage("La date fin doit être en avance de la date de début");
     }else if(tache.description.length<1){
      setValideDate(false);
      setErrorMessage("La description de la tâche ne doit pas être vide");
     }
     else{
      props?.onHandlerTaches(tache);
       setValideDate(true);
     }
  }
    return (
      <div>
        {!valideDate ? (<div>{errorMessage}</div>):""}
        
        <form onSubmit={handlerSubmit}> 

<div className="form-group row mb-4">
  <label htmlFor="debut" className="col-sm-2 col-form-label ">Date de début</label>
  <div className="col-sm-10">
  <input type="date" name={"debut"} id="debut" className={"form-control"}  value={tache?.debut} onChange={handlerChange} />

  </div>
</div>
<div className="form-group row mb-4">
  <label htmlFor="fin" className="col-sm-2 col-form-label ">Date de fin</label>
  <div className="col-sm-10">
  <input type="date" name={"fin"} id="fin" className={"form-control"} value={tache?.fin} onChange={handlerChange}/>
    </div>
  
</div>
<div className="form-group mb-4">
  <label htmlFor="">Description:</label>
  <textarea name={"description"} value={tache?.description} id="" cols="30" rows="10" className={"form-control"} onChange={handlerChange}></textarea>
</div>
<button type="submit">Ajouter</button>
        </form>
      </div>
    )
  }
  export default FormTodo;