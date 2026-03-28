import React from 'react'
import { Link, useLocation } from "react-router-dom";


export default function PageHeader() {
    const location = useLocation();

    // Split URL path
    const pathnames = location.pathname.split("/").filter(x => x);

    return (
        <div className="breadcrumb-section">
            <div className="container">

                <h1 className="breadcrumb-title">
                    {pathnames.length > 0
                        ? pathnames[pathnames.length - 1].replace("-", " ")
                        : "Home"}
                </h1>

                <div className="breadcrumb-links">
                    <Link to="/">Home</Link>

                    {pathnames.map((value, index) => {
                        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathnames.length - 1;

                        return (
                            <span key={to}>
                                {" / "}
                                {isLast ? (
                                    <span className="active">
                                        {value.replace("-", " ")}
                                    </span>
                                ) : (
                                    <Link to={to}>{value.replace("-", " ")}</Link>
                                )}
                            </span>
                        );
                    })}
                </div>

            </div>
        </div>
    )
}
