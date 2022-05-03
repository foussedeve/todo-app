import avatarDefault from "../assets/images/profil-default.jpg";
import classNames from "./profil-info.module.css";


const ProfileInfo = (props) => {
  const nom="Kaboré";
  const prenom="Alione";
  const age=20;
  const nbr=props?.nbr;


    return (
      <div className="border">
      <img src={avatarDefault} height={50} width={50} alt=" nom et prenom"/>
      <div >
        <p className={classNames.rowValue}>Nom: <span className={classNames.value}>{nom}</span></p>
        <p className={classNames.rowValue}>Prémons: <span className={classNames.value}>{prenom}</span></p>
        <p className={classNames.rowValue}>Âge: <span className={classNames.value}>{age}</span></p>
        <p className={`${classNames.rowValue} ${classNames.rowEnd}`}>Nbr: <span className={classNames.value}>{`${nbr} todo${nbr ?"s":""}`}</span></p>


      </div>
      </div>
    )
  }


  export default ProfileInfo;