import React, { useState, useEffect } from 'react';
import ReleaseService from "../services/ReleaseService";
import LatestTwoRelease from "../models/LatestTwoRelease";

const ReleaseTable: React.FC = () => {
    const [latestTwoReleases, setLatestTwoReleases] = useState<LatestTwoRelease[]>([]);

    useEffect(() => {
        const releaseService = new ReleaseService(); // 替換為您的後端 URL
        releaseService.getLatestTwoReleases()
            .then(data => setLatestTwoReleases(data))
            .catch(error => console.error('Error fetching releases:', error));
    }, []);

    return (
        <table className="release-table">
            <thead>
            <tr>
                <th>app name</th>
                <th>previous version</th>
                <th>current version</th>
            </tr>
            </thead>
            <tbody>
            {latestTwoReleases.map((release, index) => (
                <tr key={index}>
                    <td>
                        <a href={`/app/${release.app_name}`}>{release.app_name}</a>
                    </td>
                    <td>{release.secondRelease.version} ({release.secondRelease.branch})</td>
                    <td>{release.firstRelease.version} ({release.firstRelease.branch})</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default ReleaseTable;
