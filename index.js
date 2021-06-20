require('dotenv').config();

const ffmpegConcat = require('ffmpeg-concat');
const fs = require('fs');
const path = require('path');

const { checkVideoFormatsAndGetExtension } = require('./helpers/videoHelper');

(async () => {
  try {
    if (!fs.existsSync(process.env.MERGED_VIDEO_FOLDER)) {
      fs.mkdirSync(process.env.MERGED_VIDEO_FOLDER);
    }

    let videoPaths = [];
    fs.readdirSync(process.env.VIDEOS_FOLDER).forEach(file => {
      videoPaths.push(path.resolve(process.env.VIDEOS_FOLDER, file));
    });

    //const absolutePath = path.resolve( process.env.VIDEOS_FOLDER, videoPaths[0] );
    const { areVideoFormatTheSame, extension } = checkVideoFormatsAndGetExtension(videoPaths);
    if(!areVideoFormatTheSame) {
      console.error('ERROR: Video extensions are different.');
      process.exit(1);
    }

    if(!extension) {
      console.error('ERROR: Extension cannot be null.');
      process.exit(1);
    }

    const mergedVideoFileName = process.env.MERGED_VIDEO_FOLDER + Date.now() + '.' + extension;

    if(videoPaths.length <= 1) {
      console.error('ERROR: There must be more than one video on videos folder.');
      process.exit(1);
    }

    await ffmpegConcat({
      output: mergedVideoFileName,
      videos: videoPaths,
      transition: {
        name: 'directionalWipe',
        duration: 500
      }
    });

    console.log('Merge operation is done. Please check mergedVideos folder to see video.');
    process.exit(1);

  } catch (error) {
    console.log(error);
    return null;
  }
})();