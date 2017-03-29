'use strict';

var _ = require('lodash');
var Holodeck = require('../../../holodeck');
var Request = require('../../../../../lib/http/request');
var Response = require('../../../../../lib/http/response');
var RestException = require('../../../../../lib/base/RestException');
var Twilio = require('../../../../../lib');


var client;
var holodeck;

describe('Command', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.wireless.commands('DCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        sid: 'DCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://preview.twilio.com/wireless/Commands/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'command': 'command',
          'command_mode': 'command_mode',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'device_sid': 'DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sim_sid': 'DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'direction': 'direction',
          'sid': 'DCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'status',
          'url': 'https://preview.twilio.com/wireless/Commands/DCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.wireless.commands('DCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.wireless.commands.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var url = 'https://preview.twilio.com/wireless/Commands';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'commands': [],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/wireless/Commands?PageSize=50&Page=0',
              'key': 'commands',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/wireless/Commands?PageSize=50&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.wireless.commands.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'commands': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'command': 'command',
                  'command_mode': 'command_mode',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'device_sid': 'DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sim_sid': 'DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'direction': 'direction',
                  'sid': 'DCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'status',
                  'url': 'https://preview.twilio.com/wireless/Commands/DCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/wireless/Commands?PageSize=50&Page=0',
              'key': 'commands',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/wireless/Commands?PageSize=50&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.wireless.commands.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid create request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var opts = {
        command: 'command'
      };
      var promise = client.preview.wireless.commands.create(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var url = 'https://preview.twilio.com/wireless/Commands';

      var values = {
        Command: 'command',
      };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'command': 'command',
          'command_mode': 'command_mode',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'device_sid': 'DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sim_sid': 'DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'direction': 'direction',
          'sid': 'DCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'status',
          'url': 'https://preview.twilio.com/wireless/Commands/DCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(201, body));

      var opts = {
        command: 'command'
      };
      var promise = client.preview.wireless.commands.create(opts);
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

