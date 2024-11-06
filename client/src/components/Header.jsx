import { Link } from "react-router-dom"

const Header = ({title, subTitle, btn=false}) => {
  return (
    <header className="hero-section text-white text-center py-5">
        <div className="container pt-5">
            <h1 className="display-4">{title}</h1>
            <p className="lead">{subTitle}</p>
            {btn && <Link to='/booking' className="btn btn-primary-custom  btn-lg">Book a Cleaning</Link>}
        </div>
    </header>
  )
}
export default Header