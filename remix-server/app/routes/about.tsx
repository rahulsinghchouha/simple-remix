import { Link } from "@remix-run/react";

export default function About()
{

    return(
        <div>
            <h1>About Remix</h1>

            <p>This is simple remix App</p>
             <Link to="/" className="border-2 bg-blue-200">Go back Home</Link>


        </div>

    )
}