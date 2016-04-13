/**
 * Created by 123 on 13.04.2016.
 */
;

"use strict";

var modules = modules || {};
modules.ep_filtered_collection = modules.ep_filtered_collection || {};

modules.ep_filtered_collection.FilterView = Backbone.View.extend({

    initialize: function(){
        var self = this;
        this.$inputs = this.$('input');
    },

    getFilterFunction: function(){
        var self = this,
            inputsCount = 0;

        var funcParams = 'project',
            funcCode = 'return ',
            logicOperator = this.$el.attr('data-ep-fc-filter-type')
                                .match(/logicOperator\s*:\s*([^,\{\}]*)/)[1];

        switch (logicOperator){
            case 'is':
                logicOperator = '||';
                break;

            case 'interval':
                logicOperator = '&&';
                break;

            default :
                break;
        }

        function fn1(input){
            var filterData = self.getFilterData(input, 'data-ep-fc-filter');
            if(inputsCount > 0){
                funcCode += logicOperator;
            }
            funcCode += funcParams + '.get("' + filterData.valueName + '")';
            funcCode += filterData.compareOperator;
            funcCode += filterData.value;
            inputsCount++;
        }

        if (this.$inputs.is(':checked')){
            this.$inputs.each(function(i, input){
                if ($(input).is(':checked')){
                    fn1(input);
                }
            });
        } else {
            this.$inputs.each(function(i, input){
                fn1(input);
            })
        }

        funcCode += ';';

        var func = new Function(funcParams, funcCode);

        return func;
    },

    getFilterData: function(elem, attrName){
        var filterDataString = ($(elem).attr(attrName)),
            valueName = $(elem).attr('name'),
            compareOperator = filterDataString.match(/compareOperator\s*:\s*([^,\{\}]*)/)[1],
            value = $(elem).val();

        compareOperator = (compareOperator === '=') ? '===' : compareOperator;

        if ( +value / +value === 1){
            value = +value;
        } else {
            value = '"' + value + '"';
        }


        return  {
            valueName: valueName,
            compareOperator: compareOperator,
            value: value,
            filterDataString: filterDataString
        }
    }
});