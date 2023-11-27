import Card from './Card';

const CardContainer = ({ characters }) => {
   const cardClose = (index) => {
      // Lógica para cerrar la tarjeta, por ejemplo, eliminarla del array
      console.log(`Cerrando tarjeta ${index}`);
    };
   return (
     <div>
       {characters.map((character, id) => (
         <Card
           key={id}  // Asegúrate de proporcionar una clave única para cada Card
           name={character.name}
           status={character.status}
           species={character.species}
           gender={character.gender}
           origin={character.origin}
           image={character.image}
           onClose={() => cardClose(id)}  // Puedes definir la función onClose según tus necesidades
         />
       ))}
     </div>
   );
 };
 
 export default CardContainer;