'use strict';

angular.module('creditDashboardApp')
  .factory('creditDashboardData', function () {

    var rawData = {
      "tu.utilization": {
        "current": {
          "utilization":  "94.18",
          "total_balance":  12500,
          "available_credit":  11772,
          "accounts": 3
        },
        "2015-03": {
          "utilization":  "61.55",
          "total_balance":  12500,
          "available_credit":  7694,
          "accounts": 3
        },
        "2015-02": {
          "utilization":  "52.62",
          "total_balance":  12500,
          "available_credit":  6578,
          "accounts": 3
        },
        "2015-01": {
          "utilization":  "65.47",
          "total_balance":  12500,
          "available_credit":  8184,
          "accounts": 2
        },
          "2014-12": {
          "utilization":  "87.22",
          "total_balance":  12500,
          "available_credit":  10903,
          "accounts": 2
        },
          "2014-11": {
          "utilization": "90.98",
          "total_balance":  12500,
          "available_credit":  11373,
          "accounts": 2
        },
        "2014-10": {
          "utilization":  "73.3",
          "total_balance":  12500,
          "available_credit":  9163,
          "accounts": 1
        },
        "2014-09": {
          "utilization":  "88.29",
          "total_balance":  12500,
          "available_credit": 11036,
          "accounts": 1
        },
        "2014-08": {
          "utilization":  "75.14",
          "total_balance":  12500,
          "available_credit": 9392,
          "accounts": 1
        },
        "2014-06": {
          "utilization":  "44.54",
          "total_balance":  12500,
          "available_credit": 5568,
          "accounts": 1
        },
        "2014-05": {
          "utilization":  "49.19",
          "total_balance":  12500,
          "available_credit": 6149,
          "accounts": 1
        },
        "2014-03": {
          "utilization":  "65.61",
          "total_balance":  12500,
          "available_credit": 8201,
          "accounts": 1
        },
        "2014-02": {
          "utilization":  "53.75",
          "total_balance":  12500,
          "available_credit": 6719,
          "accounts": 1
        },
        "2014-01": {
          "utilization":  "38.27",
          "total_balance":  12500,
          "available_credit": 4784,
          "accounts": 1
        },
        "2013-12": {
          "utilization":  "48.12",
          "total_balance":  12500,
          "available_credit": 6015,
          "accounts": 1
        },
        "2013-11": {
          "utilization":  "47.4",
          "total_balance":  12500,
          "available_credit": 5925,
          "accounts": 1
        },
        "2013-10": {
          "utilization":  "53.82",
          "total_balance":  10000,
          "available_credit": 5382,
          "accounts": 1
        },
        "2013-09": {
          "utilization":  "52.91",
          "total_balance":  10000,
          "available_credit": 5291,
          "accounts": 1
        },
        "2013-08": {
          "utilization":  "58.81",
          "total_balance":  10000,
          "available_credit": 5881,
          "accounts": 1
        },
        "2013-07": {
          "utilization":  "75.65",
          "total_balance":  7500,
          "available_credit": 5674,
          "accounts": 1
        },
        "2013-06": {
          "utilization":  "63.65",
          "total_balance":  7500,
          "available_credit": 4774,
          "accounts": 1
        },
        "2013-05": {
          "utilization":  "49.84",
          "total_balance":  7500,
          "available_credit": 3738,
          "accounts": 1
        },
        "2013-04": {
          "utilization":  "49.84",
          "total_balance":  7500,
          "available_credit": 3738,
          "accounts": 1
        }
      }
    , 
    "__end__" : true  
    }

    var createCurrent = function (labelName) {
      var current = {}
      for (var key in rawData['tu.utilization']) {
        if (key === labelName) {
          return {  
             name: key,
             utilization: Number(rawData['tu.utilization'][key]["utilization"]).toFixed(2),
             remainingCredit: (100 - Number(rawData['tu.utilization'][key]["utilization"])).toFixed(2),
             details: rawData['tu.utilization'][key]
           }; 
      }
      }
    }

    var createHistory = function () {
      var history = {
        labels: [],
        utilizationData: [[],[]],
        dollarUtilizationData: [[],[]],
        limitData: [[],[]],
        accountNumberData: [[],[]],
      };
      for (var key in rawData['tu.utilization']) {
          history.labels.unshift(key)
          history.utilizationData[0].unshift(Number(rawData['tu.utilization'][key]['utilization']))
          history.dollarUtilizationData[0].unshift(rawData['tu.utilization'][key]['available_credit'])
          history.limitData[0].unshift(rawData['tu.utilization'][key]['total_balance'])
          history.accountNumberData[0].unshift(rawData['tu.utilization'][key]['accounts'])
        }
        return history;
    }

 
    return {createHistory: createHistory,
            createCurrent: createCurrent,
            current: 'current',
           };
      





 
  });
