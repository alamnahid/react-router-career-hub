import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h1>oops</h1>
            <Link to="/">Go back home</Link>
        </div>
    );
};

export default ErrorPage;