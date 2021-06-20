# ffmpeg-video-merge
Merge multiple videos into one using FFMPEG and ffmpeg-concat using Nodejs

## Prerequisites
Homebrew should be installed on your mac. You need to install ffmpeg to your machine.

1) ### Install FFMPEG
Using homebrew;
```
brew install ffmpeg
```
2) ### You need to create .env file on the root folder with;
* VIDEOS_FOLDER='videos'
* MERGED_VIDEO_FOLDER='mergedVideos/'

## Usage

1) You need to copy your video files into videos folder on the root. Please be careful that video extensions should be the same.
2) To run and create merged video run command:
```
npm run start
```
3) Check mergedVideos folder to see merged video.

## Tests
ONGOING