abstract class Upload {
  abstract newFileName: string;

  constructor() {
    this.progress();
  }

  uploadFile(file: File) {
    console.log("New FileName", this.newFileName);
    this.saveFile(file);
  }

  abstract saveFile(file: File): void;

  public progress(): void {
    console.log("progress upload");
  }

  startUpload() {
    console.log("start upload");
  }
}

class UploadAWS extends Upload {
  newFileName: string;

  constructor() {
    super();
    this.newFileName = "new.txt";
  }

  override progress() {
    super.progress();
    console.log("override progress");
  }

  saveFile() {
    console.log("File saved");
  }
}

const upload = new UploadAWS();
//const up = new Upload()
const file = new File(["data"], "data.txt", { type: "plain/text" });

upload.uploadFile(file);
