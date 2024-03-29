import React from "react";

function Header({number, data}) {

    console.log("Header re-rendered");
  return (
    <div>
        <h1>Header - {number}</h1>
        <br />
        <code>{JSON.stringify(data)}</code>
    </div>
  )
}
export default React.memo(Header)
// React.memo ile beraber parent component içerisinde child componentı ilgilendirmeyen bir değişiklik olduğunda re-render işleminin gereksiz yere gerçekleşmesini engelleyebiliyoruz.