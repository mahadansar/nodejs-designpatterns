class FSProxy {
  constructor(fsSubject) {
    this.fs = fsSubject;
  }

  readFile(path, format, callback) {
    if (!path.match(/.md$|.MD$/)) {
      return callback(new Error("Not MD File."));
    }

    this.fs.readFile(path, format, (error, content) => {
      if (error) {
        console.error(error);
        return callback(error);
      }

      return callback(null, content);
    });
  }
}

module.exports = FSProxy;
