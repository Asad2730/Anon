//will recive cat_id and show list of all products in card form

export default function ProductItem() {
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          background: "red",
          height: "100vh",
          width: "100vw",
        }}
      >
       <div style={{
          flex:1/2,
          background: "green",
          height: "100vh",
          width: "100vw",
      
       }}></div>
  
  <div style={{
          flex:1/2,
          background: "white",
          height: "100vh",
          width: "100vw",
      
       }}></div>
      </div>
    );
  }
  