import React from "react";
import { Link } from "react-router";

export default function Header({
    
}) {
    return (
    <header className="bookstore-header">
        <Link className="bookstore-home" to="/">Home</Link>
        <Link className="bookstore-card" to="/card">Card</Link>
    </header>
    )
}