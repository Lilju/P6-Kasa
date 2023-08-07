import footer_logo from '../../assets/images/footer_logo.svg'
import './Footer.scss'

function Footer() {
    return(
        <footer className="footer">
            <img src= { footer_logo } alt ='logo de kasa'/>
            <p>© 2023 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer