<template lang="pug">
    .container-fluid
        .card
            .card-header
                .pull-right
                    button.btn.btn-primary(data-toggle='modal', data-target='#modal') New
                form.form-inline(action='')
                    .input-group(style='width:220px;')
                        .input-group-addon
                            i.fa.fa-calendar
                        input.form-control.pull-right(type='text', name='daterange', readonly='readonly')
                    .form-group
                        label(for='') Name：
                        input.form-control(type='text', placeholder='Name')
                    .form-group
                        button.btn.btn-primary
                            | Search
            .card-body
                table.table.table-bordered
                    thead
                        tr
                            th Name
                            th Date
                            th Duration
                            th Remarks
                    tbody
                        tr
                            td 张三
                            td 2016-10-30
                            td 8
                            td  I didn't come sick (test)
                        tr
                            td 张三
                            td 2016-10-30
                            td 
                                | 4
                            td Leave (test)
                        tr
                            td
                                | 张三
                            td 2016-10-30
                            td
                                | 6
                            td  I didn't come sick (test)
                        tr
                            td
                                | 张三
                            td 2016-10-30
                            td
                                | 4
                            td  I’m not sick, I’m so sad, I’m down.
            .card-footer.clearfix
                ul.pagination.pagination-sm.no-margin.pull-right
                    li
                        a(href='#') «
                    li
                        a(href='#') 1
                    li
                        a(href='#') 2
                    li
                        a(href='#') 3
                    li
                        a(href='#') »
</template>
