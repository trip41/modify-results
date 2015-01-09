'use strict';
/*jshint expr: true, unused:false */
/*global describe, it, before, beforeEach, after, afterEach */

var models = require('../index')(),
    Api = models.Api,
    assert = require('assert'),
    expect = require('chai').expect;

///////// BOILERPLATE ALERT //////////

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
process.env.NODE_ENV = 'test';

///////// END BOILERPLATE  ///////////


// we are standardizing on the expect BDD style of assertion
// http://chaijs.com/api/bdd/


describe('kimono-models: API', function () {

  // before(function(next) {
  //   fixtures.loadFixture('kimono-test', 'test', next);
  // });

  describe('Create', function() {
    it('should be able to create a new API', function (next) {
      Api.create({
        id: 'a1b2c3d4',
        name: 'Test API',
        targeturl: 'https://news.ycombinator.com',
        access: 'public',
        collections: [
          [
            {
              'name': 'property1',
              'context': {
                'collection': 0,
                'index': 0,
                'attributes': {
                  'href': {
                    'attribute': 'href',
                    'value': false,
                    'regex': '/^()(.*?)()$/'
                  },
                  'rel': {
                    'attribute': 'rel',
                    'value': false,
                    'regex': '/^()(.*?)()$/'
                  }
                },
                'textContent': true,
                'hiddenElements': false,
                'numberOfTableNormalizers': 0
              },
              'selectorObjects': [
                {
                'selector': 'table > tbody > tr > td:nth-child(3).title > a:nth-child(1)',
                'regex': '/^()(.*?)()$/'
                }
              ]
            }
          ]
        ],
        collectionNames:  ['collection1'],
        instructions: {
          'urls': [],
          'delay': 0,
          'collectionprop': '',
          'api': '',
          'type': 'single',
          'limit': 1,
          'generated': '',
          'nextPageSelector': '',
          'nextPageRegexObj': '',
          'paginated': false
        },
        alwayssave: false,
        firstClass: false,
        userOverrideCollections: false,
        active: true,
        online: true,
        meta: false,
        pages: [],
        apikeys: [],
        createdon: new Date(),
        createdby: '53472acabbacb50800009676',
        lastversion:0,
        status:'done',
        userref: '53472acabbacb50800009676',
        frequency: 'manually',
        realtime: false,
        authEnabled: false,
        authUrl: '',
        credentials: {
          'password': '',
          'username': ''
        },
        tags: [],
        rootDomain: 'news.ycombinator.com',
        parentApiId: '',
        clonedCount: 0
      }, function(err, resp) {
        expect(resp).to.be.an.object;
        next();
      });
    });
  });

  describe('Find', function() {
    it('should be able to retrieve an API by id', function (next) {
      Api.one({ id: 'a1b2c3d4'}, {}, function(err, resp) {
        expect(resp).to.be.an.object;
        next();
      });
    });
    it('should be able to retrieve an API by id and include only specific fields', function (next) {
      Api.one({ id: 'a1b2c3d4'}, {
        fields: ['id', 'userref', 'active']
      }, function(err, resp) {
        // FIXME: Actually validate that we are returning the appropriate fields.
        expect(resp).to.be.an.object;
        next();
      });
    });
  });

  describe('Remove', function() {
    it('should be able to remove an API by id', function (next) {
      Api.remove({ id: 'a1b2c3d4'}, function(err, resp) {
        expect(resp).to.be.true;
        next();
      });
    });
  });
});


