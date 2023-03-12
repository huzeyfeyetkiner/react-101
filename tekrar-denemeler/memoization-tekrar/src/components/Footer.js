import React from "react";

function Footer({increase}) {

    console.log("Footer rendered");
  return (
    <div>
        <button onClick={increase}> Arttır </button>
    </div>
  )
}
export default React.memo(Footer)