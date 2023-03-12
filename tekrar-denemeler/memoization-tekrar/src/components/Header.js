import React from "react";


function Header({titleObj}) {

    console.log("re-rendered HEADER");

  return (
    <div>{titleObj.title}</div>
  )
}
export default React.memo(Header) 
// React.memo sayesinde ilgili componente gönderilen state'ler değişmedikçe ve fonksiyonlar, diziler, objeler useCallback ve useMemo gibi hooklar aracılığı ile hazırlanıp gönderildikçe component gereksiz yere parent component her render edildiğinde tekrar tekrar render edilmeyecek.