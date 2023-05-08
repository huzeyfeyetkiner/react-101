function Item({ item }) {
  return (
    <div>
      <div className="img-container">
        <img src={item.img} alt="menu resim" />
      </div>
      <div className="title">
        <h4>{item.title}</h4>
        <span>${item.price}</span>
      </div>
      <div className="info">
        <span>{item.desc}</span>
      </div>
    </div>
  );
}
export default Item;
