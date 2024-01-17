import axios from 'axios';
import ReleaseDetail from "../models/ReleaseDetail";
import LatestTwoRelease from "../models/LatestTwoRelease";

class ReleaseService {
    private readonly baseUrl: string = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

    async getLatestTwoReleases(): Promise<LatestTwoRelease[]> {
        try {
            const response = await axios.get(`${this.baseUrl}/release/latest-two`);
            return response.data.map((item: any) => new LatestTwoRelease(
                item.app_name,
                new ReleaseDetail(item.firstRelease.app_name, item.firstRelease.update_time, item.firstRelease.version, item.firstRelease.branch),
                new ReleaseDetail(item.secondRelease.app_name, item.secondRelease.update_time, item.secondRelease.version, item.secondRelease.branch)
            ));
        } catch (error) {
            console.error('Error getting latest two releases:', error);
            throw error;
        }
    }

    async getReleasesByAppName(appName: string): Promise<ReleaseDetail[]> {
        try {
            const response = await axios.get(`${this.baseUrl}/release/${appName}`);
            return response.data.map((item: any) => new ReleaseDetail(item.app_name, item.release_date, item.version, item.branch));
        } catch (error) {
            console.error(`Error getting releases by app name (${appName}):`, error);
            throw error;
        }
    }

    // Delete by app name
    async deleteReleasesByAppName(appName: string): Promise<void> {
        try {
            await axios.delete(`${this.baseUrl}/release/${appName}`);
        } catch (error) {
            console.error(`Error deleting releases by app name (${appName}):`, error);
            throw error;
        }
    }
}

export default ReleaseService;