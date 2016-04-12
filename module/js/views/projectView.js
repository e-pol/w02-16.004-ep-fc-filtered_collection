/**
 * Created by 123 on 12.04.2016.
 */
;

"use strict";

var modules = modules || {};
modules.ep_filtered_collection = modules.ep_filtered_collection || {};

modules.ep_filtered_collection.ProjectView = Backbone.View.extend({
    tagName: 'div',
    className: 'ep-fc-item',
    template: _.template( $('#ep-fc-project-template').html() ),

    render: function(){
        this.el.id = 'ep-fc-' + this.model.get('id');
        this.$el.html( this.template (this.model.toJSON()) );
        return this;
    }
});