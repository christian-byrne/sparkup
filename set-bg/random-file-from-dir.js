class directory {
    constructor(name, fileCount1, fileType1, fileCount2, fileType2, fileCount3, fileType3,) {
      this.name = name;
      this.fileCount1 = fileCount1;
      this.fileType1 = fileType1;
      this.fileCount2 = fileCount2;
      this.fileType2 = fileType2;
      this.fileCount3 = fileCount3;
      this.fileType3 = fileType3;
    }
  }

// Get Media Directory Details
function getDirectory(dir) {
    let allPics = new directory("allPics", 644, "jpg", 26, "png", 1, "gif")
    if (dir == "allPics") { return allPics}
}

// Get Random File from Directory
function randomFile(input) {
    let source = getDirectory(input)
    let dirRange = source.fileCount1 + source.fileCount2 + source.fileCount3 
    let rIndex = Math.floor((Math.random() * dirRange) + 1);
    fileCode = (rIndex <= source.fileCount1) ? source.fileType1 : (rIndex > source.fileCount2) ? source.fileType2 : source.fileType3
    rIndex = (rIndex <= source.fileCount1) ? rIndex : (rIndex > source.fileCount2 + source.fileCount1) ? (rIndex - (source.fileCount1 + source.fileCount2)) : (rIndex - source.fileCount1)
    return "(" + rIndex + "\\)." + fileCode + "\)"
}
