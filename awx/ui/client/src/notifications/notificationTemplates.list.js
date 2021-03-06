/*************************************************
 * Copyright (c) 2015 Ansible, Inc.
 *
 * All Rights Reserved
 *************************************************/
 /**
  * This is the list definition for the notification templates list
  * off of the settings page
  */

export default ['i18n', function(i18n){
    return {
        name:  'notification_templates' ,
        listTitle: i18n._('NOTIFICATION TEMPLATES'),
        iterator: 'notification_template',
        index: false,
        hover: false,

        fields: {
            status: {
                label: '',
                iconOnly: true,
                nosort: true,
                icon: 'icon-job-{{ notification_template.status }}',
                awPopOver: '{{ notification_template.template_status_html }}',
                dataTitle: i18n._("Recent Notifications"),
                dataPlacement: 'right',
                columnClass: 'col-lg-1 col-md-1 col-sm-2 col-xs-2 List-staticColumn--smallStatus'
            },
            name: {
                key: true,
                label: i18n._('Name'),
                columnClass: 'col-md-3 col-sm-9 col-xs-9',
                linkTo: '/#/notification_templates/{{notification_template.id}}',
                awToolTip: '{{notification_template.description | sanitize}}',
                dataPlacement: 'top'
            },
            notification_type: {
                    label: i18n._('Type'),
                    ngBind: "notification_template.type_label",
                    searchType: 'select',
                    searchOptions: [],
                    excludeModal: true,
                    columnClass: 'col-md-4 hidden-sm hidden-xs'
            }
        },

        actions: {
            add: {
                mode: 'all', // One of: edit, select, all
                ngClick: 'addNotification()',
                awToolTip: i18n._('Create a new notification template'),
                actionClass: 'btn List-buttonSubmit',
                buttonContent: '&#43; ' + i18n._('ADD'),
                ngShow: 'canAdd'
            }
        },

        fieldActions: {

            columnClass: 'col-md-2 col-sm-3 col-xs-3',
            test: {
                ngClick: "testNotification(notification_template.id)",
                icon: 'fa-bell-o',
                label: i18n._('Edit'),
                "class": 'btn-sm',
                awToolTip: i18n._('Test notification'),
                dataPlacement: 'top',
                ngShow: 'notification_template.summary_fields.user_capabilities.edit'
            },
            edit: {
                ngClick: "editNotification(notification_template.id)",
                icon: 'fa-edit',
                label: i18n._('Edit'),
                "class": 'btn-sm',
                awToolTip: i18n._('Edit notification'),
                dataPlacement: 'top',
                ngShow: 'notification_template.summary_fields.user_capabilities.edit'
            },
            copy: {
                label: i18n._('Copy'),
                ngClick: 'copyNotification(notification_template)',
                "class": 'btn-danger btn-xs',
                awToolTip: i18n._('Copy notification'),
                dataPlacement: 'top',
                ngShow: 'notification_template.summary_fields.user_capabilities.edit'
            },
            view: {
                ngClick: "editNotification(notification_template.id)",
                label: i18n._('View'),
                "class": 'btn-sm',
                awToolTip: i18n._('View notification'),
                dataPlacement: 'top',
                ngShow: '!notification_template.summary_fields.user_capabilities.edit'
            },
            "delete": {
                ngClick: "deleteNotification(notification_template.id, notification_template.name)",
                icon: 'fa-trash',
                label: i18n._('Delete'),
                "class": 'btn-sm',
                awToolTip: i18n._('Delete notification'),
                dataPlacement: 'top',
                ngShow: 'notification_template.summary_fields.user_capabilities.delete'
            }
        }
    };
}];
