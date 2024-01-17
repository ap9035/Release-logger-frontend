import ReleaseDetail from "./ReleaseDetail";

class LatestTwoRelease {
    app_name: string;
    firstRelease: ReleaseDetail;
    secondRelease: ReleaseDetail;

    constructor(app_name: string, firstRelease: ReleaseDetail, secondRelease: ReleaseDetail) {
        this.app_name = app_name;
        this.firstRelease = firstRelease;
        this.secondRelease = secondRelease;
    }
}
export default LatestTwoRelease;