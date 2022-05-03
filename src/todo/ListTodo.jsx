const ListTodo = (props) => {
  const handlerSupp=(e)=>{
    e.preventDefault();
    props.onHandlerSupp(e.target.value);
  }
    return (
      <div> 
        List des todos

        <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Date de début</th>
      <th scope="col">Date de fin</th>
      <th scope="col">Description</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    
    {props?.taches.length ? props.taches.map((tache,index)=>(
     
     <tr key={index}>
     <td>{tache.debut}</td>
     <td>{tache.fin}</td>
     <td>{tache.description}</td>
     <td><button value={index} onClick={handlerSupp}> supp</button> </td>
   </tr>
    )):null}
    
  </tbody>
</table>
        
      </div>
    )
  }


  export default ListTodo;