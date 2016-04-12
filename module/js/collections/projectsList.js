/**
 * Created by 123 on 12.04.2016.
 */
;

"use strict";

var modules = modules || {};
modules.ep_filtered_collection = modules.ep_filtered_collection || {};

modules.ep_filtered_collection.ProjectsList = Backbone.Collection.extend({
    model: modules.ep_filtered_collection.ProjectModel
});