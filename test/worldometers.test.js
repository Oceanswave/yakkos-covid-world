const assert = require('node:assert/strict');
const { test } = require('node:test');
require('ts-node/register');

const axios = require('axios');
const { WorldoMeters } = require('../src/WorldoMeters');

function table(id, cells) {
    return `<table id="${id}"><tbody><tr>${cells.map(value => `<td>${value}</td>`).join('')}</tr></tbody></table>`;
}

test('parses country and state fixtures without contacting the network or invoking ffmpeg', async () => {
    const get = axios.get;
    const dir = console.dir;
    const urls = [];
    const fixtures = [
        table('main_table_countries_today', [' Exampleland ', ' 1,234 ', ' +10 ', '50', '+1', '1,000', '184', '7', '', '', '9,000']),
        table('usa_table_countries_today', [' Example State ', ' 567 ', ' +2 ', '12', '+0', '555']),
    ];
    axios.get = async url => {
        urls.push(url);
        assert.ok(fixtures.length > 0, 'unexpected request');
        return { data: fixtures.shift() };
    };
    console.dir = () => undefined;
    try {
        const data = await WorldoMeters.getLatestCountryData();
        assert.deepEqual(urls, [
            'https://www.worldometers.info/coronavirus/#countries',
            'https://www.worldometers.info/coronavirus/country/us/',
        ]);
        assert.deepEqual(data.Exampleland, {
            totalCases: '1,234', newCases: '+10', totalDeaths: '50', newDeaths: '+1',
            totalRecovered: '1,000', activeCases: '184', seriousCritical: '7', totalTests: '9,000',
        });
        assert.deepEqual(data['Example State'], {
            totalCases: '567', newCases: '+2', totalDeaths: '12', newDeaths: '+0', activeCases: '555',
        });
    } finally {
        axios.get = get;
        console.dir = dir;
    }
});

test('rejects retrieval errors instead of treating missing data as a successful response', async () => {
    const get = axios.get;
    const failure = new Error('fixture retrieval failed');
    axios.get = async () => { throw failure; };
    try {
        await assert.rejects(WorldoMeters.getLatestCountryData(), error => error === failure);
    } finally {
        axios.get = get;
    }
});
