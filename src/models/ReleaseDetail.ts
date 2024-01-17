class ReleaseDetail {
    app_name: string;
    release_date: string; // 或者可以使用 Date 类型，根据需要进行格式化
    version: string;
    branch: string;

    constructor(app_name: string, release_date: string, version: string, branch: string) {
        this.app_name = app_name;
        this.release_date = release_date;
        this.version = version;
        this.branch = branch;
    }

    serialize() {
        return {
            app_name: this.app_name,
            release_date: this.release_date,
            version: this.version,
            branch: this.branch
        }
    }
}

export default ReleaseDetail;