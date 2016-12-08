/**
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
*/

/*jslint node: true */

var Q = require('q');

function Api(platform, platformRootDir, events) {
    console.log("Creating API for blank platform");
}

Api.createPlatform = function (destination, config, options, events) {
    console.log("createPlatform");
    return Q();
};


Api.updatePlatform = function (destination, options, events) {
    console.log("updatePlatform");
};

Api.prototype.getPlatformInfo = function () {
    console.log("getPlatformInfo");
};

Api.prototype.prepare = function (cordovaProject) {
    console.log("prepare");
};

Api.prototype.addPlugin = function (plugin, installOptions) {
    console.log("addPlugin");
};

Api.prototype.removePlugin = function (plugin, uninstallOptions) {
    console.log("removePlugin");
};

Api.prototype.build = function (buildOptions) {
    console.log("build");
};

Api.prototype.run = function(runOptions) {
    console.log("run");
};

Api.prototype.clean = function(cleanOptions) {
    console.log("clean");
};

Api.prototype.requirements = function() {
    console.log("requirements");
    return true;
};

module.exports = Api;
