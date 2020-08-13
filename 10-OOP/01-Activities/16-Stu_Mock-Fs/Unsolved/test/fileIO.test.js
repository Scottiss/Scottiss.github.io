const FileIO = require("../fileIO");
const fs = require("fs");
const { hasUncaughtExceptionCaptureCallback } = require("process");

describe("FileIO", () => {
  describe("read", () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      // Your code here
      const fileIO = new FileIO();
      const file = 'message.txt';
      let data;

      fs.readFileSync.mockReturnValue("Hello World!");
      data = fileIO.read(file);

      expect(data).toEqual("Hello World!");
      expect(fs.readFileSync).lastCalledWith(file, "utf-8");
    });
  });

  describe("write", () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      // Your code here
      const fileIO = new FileIO();
      const file = 'message.txt';
      let data = "Goodbye World.";

      fileIO.append(file, data);
      expect(fs.appendFileSync).lastCalledWith(file, data);
    });
  });
});
