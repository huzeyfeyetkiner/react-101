import styles from "./styles.module.css"
// B componentine tanımlanmış olan css içerisinde bulunan title classı ile çakışma yaşanmaması için module.css yapısı kullanıldı

console.log(styles);
function A() {
  return (
    <div className={styles.title} >A</div>
  )
}
export default A