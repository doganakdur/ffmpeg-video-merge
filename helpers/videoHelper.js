const checkVideoFormatsAndGetExtension = (videoPaths) => {
  const extensions = videoPaths.map(getVideoExtension);

  const areVideoFormatTheSame = extensions.every((val, i, arr) => val === arr[0]);

  const extension = areVideoFormatTheSame ? extensions[0] : null;

  return {
    areVideoFormatTheSame,
    extension
  };
}

const getVideoExtension = (videoPath) => {
  return videoPath.slice(videoPath.indexOf('.') + 1);
};

module.exports = {
  checkVideoFormatsAndGetExtension
};