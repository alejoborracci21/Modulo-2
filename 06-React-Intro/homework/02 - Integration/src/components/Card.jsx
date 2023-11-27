
const Card = ({ name, status, species, gender, origin, image, onClose }) => {
   return (
      <div className="card">
       <div className="card-details">
         <button onClick={onClose}>X</button>
         <h2>{name}</h2>
         <h2>Status: {status}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin.name}</h2>
        <img src={image} alt={name} />
       </div>
     </div>
   );
 };
 
 export default Card;