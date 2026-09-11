import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PageNavigation({
    previous,
    previousLabel,
    next,
    nextLabel,
}) {
    return (
        <div className="page-nav">
            {previous ? (
                <Link to={previous} className="page-nav-link">
                    <ChevronLeft size={19} />
                    <span>{previousLabel}</span>
                </Link>
            ) : (
                <span />
            )}

            {next ? (
                <Link
                    to={next}
                    className="page-nav-link page-nav-link-next"
                >
                    <span>{nextLabel}</span>
                    <ChevronRight size={19} />
                </Link>
            ) : (
                <span />
            )}
        </div>
    );
}