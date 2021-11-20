import {useState} from "react";

const Collections =  () => {

    const [collections, setCollections] = useState([]);

    let url = "https://fakestoreapi.com/products";

    const getCollections = async () => {
      const response = await fetch(url);

      const jsonData = await response.json();
      setCollections(jsonData);

    };

    getCollections();

    let myCollection = collections.filter(collection => collection.category !== "electronics");



  return <div className="collections">
      {myCollection && myCollection.map(collection =>(
          <div className="container" key={collection.id}>
            <img src={collection.image} alt={collection.title} />
            <h2> {collection.title}</h2>
            <p> {collection.description} </p>
          </div>
      ))}
  </div>;
};

export default Collections;
