import style from "./Navbar.module.css"
import CartWidget from "../common/CartWidget"
const navbar = () => {
  return (
    <div>
      <img src="https://i.imgur.com/h3cbOSX.jpeg" style={{width: "250px"}} alt="logo1" />
      <ul className={style.categories}>
        <li>Primario</li>
        <li>Secundario</li>
        <li>Pre-Universitario</li>
        <li>Universitario</li>
      </ul>
      <CartWidget />
    </div>
  )
}

export default navbar