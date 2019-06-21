<template lang="pug">
    .container-fluid
        .card
            .card-header
                form.form-inline(action='')
                    .form-group
                        .input-group(style='width:220px;')
                            .input-group-prepend
                                span.input-group-text
                                    i.far.fa-calendar-alt
                            input.form-control.pull-right(type='text', name='daterange', readonly='readonly')
                    .form-group
                        label(for='') 姓名：
                        input.form-control(type='text', placeholder='姓名')
                    .form-group
                        button.btn.btn-primary 搜索
                .card-tools
                    button.btn.btn-primary(data-toggle='modal', data-target='#modal')  新增
            .card-body
                table.table.table-bordered
                    thead
                        tr
                            th 姓名
                            th 日期
                            th 时长
                            th 备注
                    tbody
                        tr
                            td
                            | 张三
                            td 2016-10-30
                            td
                            | 8
                            td
                            | 生病没来(调休)
                  
                .box-footer.clearfix
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
