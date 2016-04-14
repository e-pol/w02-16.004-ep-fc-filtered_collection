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
            type: 'house',
            area: 200,
            floors: 2,
            realized: 'В процессе',
            bedrooms: 3,
            technology: 'Проф. брус',
            imageSrc: 'data/project_pb-16_001/project_pb-16_001.jpg'
        },
        {
            id: '16002',
            title: 'Проект ПБ-16.002',
            type: 'house',
            area: 150,
            floors: 2,
            realized: '2016-Iкв',
            bedrooms: 2,
            technology: 'Проф. брус',
            imageSrc: 'data/project_pb-16_001/project_pb-16_001.jpg'
        },
        {
            id: '16003',
            title: 'Проект ПБ-16.003',
            type: 'bath',
            area: 100,
            floors: 1,
            realized: '2016-IIкв',
            bedrooms: 1,
            technology: 'Лафет',
            imageSrc: 'data/project_pb-16_001/project_pb-16_001.jpg'
        },
        {
            id: '16004',
            title: 'Проект ПБ-16.001',
            type: 'house',
            area: 200,
            floors: 2,
            realized: 'В процессе',
            bedrooms: 3,
            technology: 'Проф. брус',
            imageSrc: 'data/project_pb-16_001/project_pb-16_001.jpg'
        },
        {
            id: '16005',
            title: 'Проект ПБ-16.002',
            type: 'house',
            area: 150,
            floors: 2,
            realized: '2016-Iкв',
            bedrooms: 2,
            technology: 'Проф. брус',
            imageSrc: 'data/project_pb-16_001/project_pb-16_001.jpg'
        },
        {
            id: '16006',
            title: 'Проект ПБ-16.003',
            type: 'bath',
            area: 100,
            floors: 1,
            realized: '2016-IIкв',
            bedrooms: 1,
            technology: 'Лафет',
            imageSrc: 'data/project_pb-16_001/project_pb-16_001.jpg'
        },
        {
            id: '16007',
            title: 'Проект ПБ-16.001',
            type: 'house',
            area: 200,
            floors: 2,
            realized: 'В процессе',
            bedrooms: 3,
            technology: 'Проф. брус',
            imageSrc: 'data/project_pb-16_001/project_pb-16_001.jpg'
        },
        {
            id: '16008',
            title: 'Проект ПБ-16.002',
            type: 'house',
            area: 150,
            floors: 2,
            realized: '2016-Iкв',
            bedrooms: 2,
            technology: 'Проф. брус',
            imageSrc: 'data/project_pb-16_001/project_pb-16_001.jpg'
        },
        {
            id: '16009',
            title: 'Проект ПБ-16.003',
            type: 'bath',
            area: 100,
            floors: 1,
            realized: '2016-IIкв',
            bedrooms: 1,
            technology: 'Лафет',
            imageSrc: 'data/project_pb-16_001/project_pb-16_001.jpg'
        },
        {
            id: '16010',
            title: 'Проект ПБ-16.001',
            type: 'house',
            area: 200,
            floors: 2,
            realized: 'В процессе',
            bedrooms: 3,
            technology: 'Проф. брус',
            imageSrc: 'data/project_pb-16_001/project_pb-16_001.jpg'
        },
        {
            id: '16011',
            title: 'Проект ПБ-16.002',
            type: 'house',
            area: 150,
            floors: 2,
            realized: '2016-Iкв',
            bedrooms: 2,
            technology: 'Проф. брус',
            imageSrc: 'data/project_pb-16_001/project_pb-16_001.jpg'
        },
        {
            id: '16012',
            title: 'Проект ПБ-16.003',
            type: 'bath',
            area: 100,
            floors: 1,
            realized: '2016-IIкв',
            bedrooms: 1,
            technology: 'Лафет',
            imageSrc: 'data/project_pb-16_001/project_pb-16_001.jpg'
        }
    ];

    new modules.ep_filtered_collection.CatalogView(projects);
});