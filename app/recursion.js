recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   * 
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   * 
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function listFiles(data, dirName) {
    var returnedDir = [];
    //Add files if directory match or no directory specified. Clear DirName to properly list subdirectories
    if(data.files && (!dirName || dirName == data.dirName)){
      dirName = "";
      returnedDir = returnedDir.concat(data.files);
    }

    //Check subdirectories & repeat
    if(data.subDirs && data.subDirs.length > 0){
      data.subDirs.forEach(subDirectory => {
        var subDirFiles = listFiles(subDirectory, dirName);
        returnedDir = returnedDir.concat(subDirFiles);
      });
    }
    return returnedDir;
  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   * 
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   * 
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {
    if(n === 1 ){
      return 1;
    }
    if(n <= 0){
      return 0;
    }
    return fibonacci(n-1) + fibonacci(n-2);
  },
};



