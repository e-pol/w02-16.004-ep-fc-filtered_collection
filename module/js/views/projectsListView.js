/**
 * Created by 123 on 12.04.2016.
 */
;

"use strict";

var modules = modules || {};
modules.ep_filtered_collection = modules.ep_filtered_collection || {};

modules.ep_filtered_collection.ProjectsListView = Backbone.View.extend({
    el: '.ep-fc-items',

    initialize: function(initialProjects){
        this.initialCollection = new modules.ep_filtered_collection.ProjectsList(initialProjects);
        this.collection = this.initialCollection.clone();
        this.render(this.collection, this);
    },

    render: function(collection, context){
        var collection = collection || this.collection,
            context = context || this;

        this.$el.empty();

        collection.each(function(project){
            this.renderProject(project);
        }, context);
    },

    renderProject: function(project){
        var projectView = new modules.ep_filtered_collection.ProjectView({
            model: project
        });
        this.$el.append( projectView.render().el );
    },

    renderProjectsSortedByArea: function(){
        this.collection.comparator = 'area';
        this.collection.sort();
        this.render();
    },

    renderProjectsSortedByName: function(){
        this.collection.comparator = 'title';
        this.collection.sort();
        this.render();
    },

    renderProjectsSortedByTech: function() {
        this.collection.comparator = 'technology';
        this.collection.sort();
        this.render();
    },

    renderProjectsDisableSorted: function(){
        this.collection = this.initialCollection.clone();
        this.render();
    }
});