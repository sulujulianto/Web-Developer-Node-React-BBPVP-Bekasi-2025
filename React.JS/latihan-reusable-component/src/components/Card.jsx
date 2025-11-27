function Card({ title, children }) {
  const style = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "10px 0",
    boxShadow: "0 2px 6px rgba(0,0,0,.1)"
  };
  return (
    <div style={style}>
      <h3 style={{ margin: "0 0 8px 0" }}>{title}</h3>
      <div>{children}</div>
    </div>
  );
}
export default Card;