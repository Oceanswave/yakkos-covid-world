import ffmpeg from 'fluent-ffmpeg';
import { cloneDeep } from 'lodash';
import chalk from 'chalk';

import { AudioVideoFilter } from './src/AudioVideoFilter';
import { segments } from './src/YakkosWorld4kSegments';
import { WorldoMeters } from './src/WorldoMeters';
import { CountryCovidData } from './src/CountryCovidData';

const textFilterPrototype: AudioVideoFilter = {
    filter: 'drawtext',
    options: {
        enable: 'between(t, 12, 24)',
        text: 'THIS IS TEXT',
        fontsize: 224,
        fontcolor: 'white',
        x: '(main_w/2-text_w/2)',
        y: 50,
        shadowcolor: 'black',
        shadowx: 2,
        shadowy: 2
    }
};


const data = ["??", "?", "??", "?!?"];

const getFiltersForSegments = (countryData: { [countryName: string]: CountryCovidData }): AudioVideoFilter[] => {
    const filters = [];
    let blankCount = 0;
    for (let i = 0; i < segments.length; i++) {
        const currentSegment = segments[i];
        let endFrame = 99999;
        if (currentSegment.endFrame) {
            endFrame = currentSegment.endFrame;
        } else if (i < (segments.length - 1)) {
            endFrame = segments[i + 1].frame;
        }

        if (!currentSegment.frame || currentSegment.frame === 0 || !endFrame) {
            continue;
        }

        // Create a new filter from the prototype
        const filter = cloneDeep(textFilterPrototype);
        
        // Set the duration that the text shows.
        filter.options.enable = `between(n, ${currentSegment.frame}, ${endFrame})`;

        // Set the text.
        if (currentSegment.text) {
            filter.options.text = currentSegment.text;
        } else {
            let countryName = currentSegment.name;
            if (currentSegment.alt) {
                countryName = currentSegment.alt;
            }

            const currentData = countryData[countryName];
            if (!currentData) {
                console.log(chalk.yellow(`Unable to find ${countryName}`));
                filter.options.text = data[blankCount % data.length];
                blankCount++;
            } else {
                filter.options.text = `${currentData.totalCases} (${currentData.newCases === '' ? '--' : currentData.newCases})`;
            }
        }

        // Set the font size
        filter.options.fontsize = currentSegment.fontSize ?? 224;

        filter.options.text = filter.options.text.replace(`'`, `''`).replace(`:`, `\\:`);
        console.dir(filter.options.text);

        filter.options.x = currentSegment.x ?? '(main_w/2-text_w/2)';
        filter.options.y = currentSegment.y ?? 400;

        filters.push(filter);
    }

    return filters;
}

const run = async () => {

    const countryData = await WorldoMeters.getLatestCountryData();
    const filters = getFiltersForSegments(countryData);

    const process = new Promise((resolve, reject) => {
        ffmpeg('./media/YakkosWorld_4k.mp4')
            .on('progress', (progress) => {
                console.log(`[ffmpeg] ${JSON.stringify(progress)}`);
            })
            .on('error', (err) => {
                console.error(`[ffmpeg] error: ${err.message}`);
                reject(err);
            })
            .on('end', () => {
                console.log('[ffmpeg] finished');
                resolve();
            })
            .videoFilters(filters)
            // Uncomment when testing to reduce processing time
            // .size('640x480')
            // .videoBitrate('256k')
            .output('outputfile.mp4')
            .run();
    });

    await process;
};

run().then(() => {
    console.log("All Done!");
}).catch((reason) => {
    console.log(chalk.red(`An error occurred: ${reason}`));
});