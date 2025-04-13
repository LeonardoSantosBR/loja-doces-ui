import { google } from "googleapis";
import * as path from "path";

export class GoogleDriveService {
  private authClient: any;
  private drive: any;

  constructor() {
    this.auth();
  }

  async auth() {
    this.authClient = new google.auth.GoogleAuth({
      credentials: JSON.parse(
        process.env.GOOGLE_SERVICE_ACCOUNT_JSON as string
      ),
      scopes: ["https://www.googleapis.com/auth/drive"],
    });

    const auth = await this.authClient.getClient();
    this.drive = google.drive({ version: "v3", auth });
  }

  async uploadFile(filePath: string, folderId: string) {
    if (!this.drive) await this.auth();

    const fileName = path.basename(filePath);
    
  }
}
