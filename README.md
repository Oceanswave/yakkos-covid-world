Overlays current Covid Stats onto Yakko's World
---

Grabs the current Covid-19 data and generates Yakko's World video with the current covid statistics based on what Yakko is pointing to.

## Usage

FFMpeg must be installed and either available on the path or by indicating the install location using the ```FFMPEG_PATH``` environment variable.


To install ffmpeg:

Windows:
```
choco install ffmpeg
```

macOS
```
brew install ffmpeg
```

Then, to generate the video based on current statistics on www.worldometers.com simply run

```
yarn
yarn start
```

(or npm install, npm start if you prefer)


Current data will be retrieved and outputfile.mp4 will contain the generated video.

## Video Content

The original Yakko's World 4k video included in the /media folder was obtained via:

```
youtube-dl "https://www.youtube.com/watch?v=RCXYQQplS-A" --prefer-ffmpeg --recode-video mp4
```

## Offline validation

Use Node.js 24 and Yarn 1.22.22. Run `yarn install --frozen-lockfile`,
`yarn typecheck`, and `yarn test`. CI runs these checks on pull requests and
pushes to master. The tests replace HTTP responses with country/state HTML
fixtures; they do not fetch current statistics, invoke ffmpeg, or render media.
This verifies parsing and compilation, not the availability or current layout
of the upstream site or a complete media render.
