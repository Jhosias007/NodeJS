interface IUpload {
  save(file: File): void
}

abstract class AUpload {
  abstract save(file: File): void
}


class FactoryUploadAWS extends AUpload {
  save(file: File): void {
      this.startProgress()        
      setTimeout(() => this.endProgress(), 2000)
  }

  startProgress() {
      console.log("Uploading file");
  }

  endProgress() {
      console.log("Uploaded file");
  }
}

class FactoryUploadAzure extends AUpload {
  save(file: File): void {
      this.progress()        
  }

  progress() {
      console.log("Uploading file to Azure");
  }
}

class FactoryUploadGCP extends AUpload {
  save(file: File): void {
      this.progress()        
  }

  progress() {
      console.log("Uploading file to GCP");
  }
}



const upload: AUpload = new FactoryUploadGCP()
upload.save(new File(["data"], "data.txt", {type: "text/plain"}))
