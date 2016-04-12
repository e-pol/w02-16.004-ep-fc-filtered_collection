/**
 * Created by 123 on 11.04.2016.
 */

;

"use strict";

var modules = modules || {};
modules.ep_filtered_collection = modules.ep_filtered_collection || {};

$(function(){
    var projects = [
        {
            id: '16001',
            title: 'Проект ПБ-16.001',
            area: 200,
            floors: 2,
            realized: 'in progress',
            bedrooms: 3,
            technology: 'profiled_beam',
            imageSrc: 'data/project_pb-16_001/project_pb-16_001.jpg'
        },
        {
            id: '16002',
            title: 'Проект ПБ-16.002',
            area: 150,
            floors: 2,
            realized: '2016-Iкв',
            bedrooms: 2,
            technology: 'profiled_beam',
            imageSrc: 'data/project_pb-16_001/project_pb-16_001.jpg'
        },
        {
            id: '16003',
            title: 'Проект ПБ-16.003',
            area: 100,
            floors: 1,
            realized: '2016-IIкв',
            bedrooms: 1,
            technology: 'laften',
            imageSrc: 'data/project_pb-16_001/project_pb-16_001.jpg'
        }
    ];

    new modules.ep_filtered_collection.CatalogView(projects);
});