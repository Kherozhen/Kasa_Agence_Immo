import { Link } from 'react-router-dom';


function ErrorPage () {

    return (
        <div className='pageError'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>

            <Link to="/">Retourner sur la page d'acceuil</Link>

        </div>
    )
}
    

export default ErrorPage;