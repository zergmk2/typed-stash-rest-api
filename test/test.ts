import test = require('blue-tape');

import StashApi = require('stash-rest-api');

test('constructor', t => {
    t.true(StashApi.Client, 'Client is defined');
    t.end();
});
