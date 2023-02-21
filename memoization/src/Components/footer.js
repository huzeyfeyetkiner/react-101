import React from "react";


function Footer({increase}) {

  console.log("Footer rendered");
  return (
    <div>
      {/* onclick kısmındaki fonksiyonu parent element içerisinden prop aldık */}
      <button onClick={increase}>Increase</button>
    </div>
  )
}
export default React.memo(Footer) 