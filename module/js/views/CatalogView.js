/**
 * Created by 123 on 12.04.2016.
 */
;

"use strict";

var modules = modules || {};
modules.ep_filtered_collection = modules.ep_filtered_collection || {};

modules.ep_filtered_collection.CatalogView = Backbone.View.extend({
    el: '.ep-fc-filtered-collection',

    events: {
        'click .ep-fc-collection-sort a': 'sortProjectsBy'
    },

    initialize: function(initialProjects){
        this.projectListView = new modules.ep_filtered_collection.ProjectsListView(initialProjects);
        this.filtersView = new modules.ep_filtered_collection.FiltersView();
        this.listenTo(this.filtersView, 'applyFilters', this.applyFilters);
        this.listenTo(this.filtersView, 'resetFilters', this.resetFilters);
    },

    render: function(){
        this.projectListView.render();
    },

    applyFilters: function(){
        console.log('applying filters');
        this.projectListView.filterList( this.filtersView.getFiltersFunctions() );
    },

    resetFilters: function(){
        console.log('resetting filters');
        this.projectListView.resetList();
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

            default :
                break;
        }
    }
});