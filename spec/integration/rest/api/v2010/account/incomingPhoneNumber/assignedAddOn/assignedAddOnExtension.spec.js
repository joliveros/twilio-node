'use strict';

var _ = require('lodash');
var Holodeck = require('../../../../../../holodeck');
var Request = require('../../../../../../../../lib/http/request');
var Response = require('../../../../../../../../lib/http/response');
var RestException = require('../../../../../../../../lib/base/RestException');
var Twilio = require('../../../../../../../../lib');


var client;
var holodeck;

describe('AssignedAddOnExtension', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .incomingPhoneNumbers('PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .assignedAddOns('XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .extensions('XFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        accountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        resourceSid: 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        assignedAddOnSid: 'XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'XFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/IncomingPhoneNumbers/<%= resourceSid %>/AssignedAddOns/<%= assignedAddOnSid %>/Extensions/<%= sid %>.json')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'sid': 'XFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'assigned_add_on_sid': 'XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'resource_sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'Incoming Voice Call',
          'product_name': 'Programmable Voice',
          'unique_name': 'voice-incoming',
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AssignedAddOns/XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Extensions/XFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json',
          'enabled': true
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .incomingPhoneNumbers('PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .assignedAddOns('XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .extensions('XFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
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

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .incomingPhoneNumbers('PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .assignedAddOns('XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .extensions.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        accountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        resourceSid: 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        assignedAddOnSid: 'XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/IncomingPhoneNumbers/<%= resourceSid %>/AssignedAddOns/<%= assignedAddOnSid %>/Extensions.json')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AssignedAddOns/XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Extensions.json?PageSize=50&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'extensions': [
              {
                  'sid': 'XFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'assigned_add_on_sid': 'XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'resource_sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'Incoming Voice Call',
                  'product_name': 'Programmable Voice',
                  'unique_name': 'voice-incoming',
                  'enabled': true,
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AssignedAddOns/XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Extensions/XFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
              }
          ],
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AssignedAddOns/XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Extensions.json?PageSize=50&Page=0'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .incomingPhoneNumbers('PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .assignedAddOns('XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .extensions.list();
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
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AssignedAddOns/XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Extensions.json?PageSize=50&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'extensions': [],
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AssignedAddOns/XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Extensions.json?PageSize=50&Page=0'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .incomingPhoneNumbers('PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .assignedAddOns('XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .extensions.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

