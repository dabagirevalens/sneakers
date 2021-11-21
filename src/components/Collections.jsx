import { useQuery } from "react-query";

const getCollections = async () =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const Collections = () => {
  const { data, isLoading, error } = useQuery("collections", getCollections);

  return (
    <div className="collections">
      {error ? (
        <div style={{color : 'red' }} >Something went wrong.</div>
      ) : isLoading ? (
        <div className="loading"> Loading ..... </div>
      ) : (
        data
          ?.filter((item) => item.category !== "electronics")
          .map((collection) => (
            <div className="collection-container" key={collection.id}>
              <img src={collection.image} alt={collection.title} />
              <h2> {collection.title}</h2>
              <p> {collection.description} </p>
            </div>
          ))
      )}
    </div>
  );
};

export default Collections;
