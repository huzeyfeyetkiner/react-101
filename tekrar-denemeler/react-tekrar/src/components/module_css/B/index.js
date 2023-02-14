import styles from "./styles.module.css"

// A componentine tanımlanmış olan css içerisinde bulunan title classı ile çakışma yaşanmaması için module.css yapısı kullanıldı

console.log(styles);

function B() {
  return (
    <div className={styles.title}>B</div>
  )
}
export default B