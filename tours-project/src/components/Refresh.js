function Refresh({getData}) {
  return (
    <div>
        <h1>There is no tour left</h1>
        <button className="btn-refresh" onClick={() => getData()}>Refresh</button>
    </div>
  )
}
export default Refresh