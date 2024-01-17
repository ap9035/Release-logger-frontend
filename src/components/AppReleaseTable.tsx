import ReleaseDetail from "../models/ReleaseDetail";
import {useEffect, useState} from "react";
import ReleaseService from "../services/ReleaseService";

interface AppReleaseTableProps {
    appName: string;
}

const AppReleaseTable = ({ appName }: AppReleaseTableProps) => {
    const [releasesDetails, setReleasesDetails] = useState<ReleaseDetail[]>([]);
    const releaseService = new ReleaseService(); // 替換為您的後端 URL

    useEffect(() => {
        releaseService.getReleasesByAppName(appName)
            .then(data => {
                setReleasesDetails(data)
            })
            .catch(error => console.error('Error fetching releases:', error));
    }, []);

    return (
        <table className="release-table">
            <thead>
            <tr>
                <th>version</th>
                <th>update time</th>
                <th>branch</th>
            </tr>
            </thead>
            <tbody>
            {releasesDetails.map((release, index) => (
                <tr key={index}>
                    <td>{release.version}</td>
                    <td>{release.release_date}</td>
                    <td>{release.branch}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default AppReleaseTable;