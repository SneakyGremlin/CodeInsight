import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { problems, getProblemLabel } from "./problems/problemRegistry";

const Home = () => {
    return (
        <div className="home-page">
            <header className="home-hero">
                <h1>Welcome to CodeInsight</h1>
                <p>
                    Read a short code snippet, explain in plain English what it does,
                    and let the model regenerate it. Your explanation is graded against
                    the snippet's hidden test cases.
                </p>
            </header>

            <section className="problem-grid">
                {problems.map((problem) => (
                    <Link
                        key={problem.slug}
                        to={`/problem/${problem.slug}`}
                        className="problem-card"
                    >
                        <h2>{getProblemLabel(problem.slug)}</h2>
                        <span className="problem-card-cta">Start &#8594; </span> {/* &#8594; is a right arrow. */}
                    </Link>
                ))}
            </section>
        </div>
    );
};

export default Home;
