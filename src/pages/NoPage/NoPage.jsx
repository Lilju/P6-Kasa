import { Link } from "react-router-dom";
import "./NoPage.scss";

function NoPage() {
  return (
    <div className="nopage">
      <h1 className="nopage_404">404</h1>
      <p className="nopage_woopsie">Oups! La page que vous demandez n'existe pas.</p>
      <Link className="nopage_backlink" to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default NoPage;