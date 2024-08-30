import React, { useEffect, useState } from "react";
import { MatchDetailCard } from "../components/MatchDetailCard";

export const MatchPage = () => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        const fetchMatches = async () => {
            const response = await fetch('http://localhost:8080/team/Delhi Capitals/matches?year=2023');
            const data = await response.json();
            console.log(data);
            setMatches(data);
        }
        fetchMatches();
   
    },[]);

    return (
        <div className="MatchPage">
            <h1>Match Page</h1>
            {matches.map((match) => <MatchDetailCard teamName="Delhi Capitals" match={match}/>) }
        </div>
    )
}