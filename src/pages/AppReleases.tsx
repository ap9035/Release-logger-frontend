import React from "react";
import AppReleaseTable from "../components/AppReleaseTable";
import { useParams } from "react-router-dom";
import ReleaseService from "../services/ReleaseService";
import {release} from "node:os";

interface RouteParams {
    [key: string]: string | undefined;
}

const AppReleases = () => {
    const { appName } = useParams<RouteParams>();


    if (!appName) {
        return <></>;
    }

    const handleDelete = () => {
        console.log('delete');
        const releaseService = new ReleaseService(); // 替換為您的後端 URL
        releaseService.deleteReleasesByAppName(appName)
            .then(data => {
                console.log(data);
                // redirect to home page
                window.location.href = '/';
            })
    }

    return (
        <>
            <h2>service: {appName}</h2>
            <AppReleaseTable appName={appName}/>
            <button onClick={handleDelete}>Delete All</button>
        </>
    )
}

export default AppReleases;