import React from "react";

export default function FavList() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems();
  }, []);

  async function getItems() {
    let dataURL = `/favourites`;
    console.log("inside get");
    try {
      let response = await fetch(dataURL);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setItems(data);
      } else {
        setError(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      setError(`Network error: ${error.message}`);
    }
  }
  return (
    <div>
      <p>this is the favourites list</p>
      {items.map((i) => (
        <div key={i.id}>
          {/* <Link to={`/favourites/${i.id}`}> */}
          <div>{i.name}</div>
          <div>{i.website}</div>
          <div>{i.cuisine}</div>
          <div>{i.notes}</div>
          {/* //onClick={() => props.showItem(i)} */}
          {/* </Link> */}
        </div>
      ))}
      ;
    </div>
  );
}
