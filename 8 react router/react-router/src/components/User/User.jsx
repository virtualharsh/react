import React from "react";
import { useLoaderData } from "react-router-dom";
import Github from '../Github/Github'

const User = () => {
    const data = useLoaderData(); // Access the data loaded by the loader

    return (
        <>
            <Github data={data} />
        </>
    );
};

export default User;
