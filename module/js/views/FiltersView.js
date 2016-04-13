/**
 * Created by 123 on 12.04.2016.
 */
;

"use strict";

var modules = modules || {};
modules.ep_filtered_collection = modules.ep_filtered_collection || {};

modules.ep_filtered_collection.FiltersView = Backbone.View.extend({
    el: '#ep-fc-filters',

    initialize: function(){
        var self = this;
        this.filtersViews = [];
        this.addFilterView(new modules.ep_filtered_collection.FilterView({el: '#ep-fc-filter-type'}));
        this.addFilterView(new modules.ep_filtered_collection.FilterView({el: '#ep-fc-filter-area'}));
        this.addFilterView(new modules.ep_filtered_collection.FilterView({el: '#ep-fc-filter-floors'}));
        this.addFilterView(new modules.ep_filtered_collection.FilterView({el: '#ep-fc-filter-bedrooms'}));
        this.addFilterView(new modules.ep_filtered_collection.FilterView({el: '#ep-fc-filter-technology'}));

        this.$submit = this.$('button[type="submit"]');
        this.$reset = this.$('button[type="reset"]');

        this.$el.change(this.showNumberOfFilteredItems);
        this.$submit.click(self, this.applyFilters);
        this.$reset.click(self, this.resetFilters);
    },

    showNumberOfFilteredItems: function(e){
        console.log('setting filters');
    },

    applyFilters: function(e){
        e.preventDefault();
        e.data.trigger('applyFilters');
    },

    resetFilters: function(e){
        e.data.trigger('resetFilters');
    },

    addFilterView: function(filterView){
        this.filtersViews.push(filterView);
    },

    getFiltersFunctions: function(){
        var filtersFunctions = [];
        this.filtersViews.forEach(function(filterView){
            filtersFunctions.push(filterView.getFilterFunction());
        });
        return filtersFunctions;
    }
});
