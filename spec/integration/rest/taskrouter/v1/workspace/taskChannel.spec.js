'use strict';

var _ = require('lodash');
var Holodeck = require('../../../../holodeck');
var Request = require('../../../../../../lib/http/request');
var Response = require('../../../../../../lib/http/response');
var RestException = require('../../../../../../lib/base/RestException');
var Twilio = require('../../../../../../lib');


var client;
var holodeck;

describe('TaskChannel', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.taskrouter.v1.workspaces('WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .taskChannels('TCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        workspaceSid: 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'TCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://taskrouter.twilio.com/v1/Workspaces/<%= workspaceSid %>/TaskChannels/<%= sid %>')(solution);

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
          'date_created': '2014-05-14T10:50:02Z',
          'date_updated': '2014-05-14T23:26:06Z',
          'friendly_name': 'Default',
          'sid': 'TCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'unique_name': 'default',
          'url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TaskChannels/TCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'workspace_sid': 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.taskrouter.v1.workspaces('WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .taskChannels('TCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
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

      var promise = client.taskrouter.v1.workspaces('WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .taskChannels.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        workspaceSid: 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://taskrouter.twilio.com/v1/Workspaces/<%= workspaceSid %>/TaskChannels')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'channels': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2014-05-14T10:50:02Z',
                  'date_updated': '2014-05-14T23:26:06Z',
                  'friendly_name': 'Default',
                  'sid': 'TCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'default',
                  'url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TaskChannels/TCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'workspace_sid': 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TaskChannels?PageSize=50&Page=0',
              'key': 'channels',
              'last_page_url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TaskChannels?PageSize=50&Page=0',
              'next_page_url': null,
              'page': 0,
              'page_size': 1,
              'previous_page_url': null,
              'url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TaskChannels?PageSize=50&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.taskrouter.v1.workspaces('WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .taskChannels.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'channels': [],
          'meta': {
              'first_page_url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TaskChannels?PageSize=50&Page=0',
              'key': 'channels',
              'last_page_url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TaskChannels?PageSize=50&Page=0',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TaskChannels?PageSize=50&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.taskrouter.v1.workspaces('WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .taskChannels.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

