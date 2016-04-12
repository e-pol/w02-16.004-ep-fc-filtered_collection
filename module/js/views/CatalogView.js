/**
 * Created by 123 on 12.04.2016.
 */
;

"use strict";

var modules = modules || {};
modules.ep_filtered_collection = modules.ep_filtered_collection || {};

modules.ep_filtered_collection.CatalogView = Backbone.View.extend({
    el: '.ep-fc-filtered-collection',

    ui: {
        sortByArea: '#ep-fc-sort-by-area'
    },

    events: {
        'click .ep-fc-collection-sort a': 'sortProjectsBy'
    },

    initialize: function(initialProjects){
        this.projectListView = new modules.ep_filtered_collection.ProjectsListView(initialProjects);
    },

    render: function(){
        this.projectListView.render();
    },

    sortProjectsBy: function(e){
        switch (e.target.hash){
            case '#ep-fc-sort-by-area':
                this.projectListView.renderProjectsSortedByArea();
                break;

            case '#ep-fc-sort-by-name':
                this.projectListView.renderProjectsSortedByName();
                break;

            case '#ep-fc-sort-by-tech':
                this.projectListView.renderProjectsSortedByTech();
                break;

            case '#ep-fc-sort-by-disable':
                this.projectListView.renderProjectsDisableSorted();
                break;

            default :
                break;
        }
    }
});