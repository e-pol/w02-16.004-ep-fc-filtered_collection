/**
 * Created by 123 on 12.04.2016.
 */
;

"use strict";

var modules = modules || {};
modules.ep_filtered_collection = modules.ep_filtered_collection || {};

modules.ep_filtered_collection.ProjectModel = Backbone.Model.extend({
    defaults: {
        id: '',
        title: '������',
        area: null,
        floors: null,
        realized: '����������',
        bedrooms: 0,
        technology: null,
        imageSrc: null
    }
});