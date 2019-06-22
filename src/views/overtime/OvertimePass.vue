<template lang="pug">
    .container-fluid
        .card
            .card-header
                button.btn.btn-sm.btn-primary New
                form.form-inline(action='')
                    .form-group
                        label(for='') Category：
                        select.form-control
                            option(value='all') All
                            option(value='false') Failure
                            option(value='true') Passed
                            option(value='true') Not approved
                    .form-group
                        label(for='') Name：
                        input.form-control(type='text', placeholder='姓名')
                    .input-group(style='width:220px;')
                        .input-group-prepend
                            span.input-group-text
                                i.far.fa-calendar-alt
                        input.form-control.pull-right(type='text', name='daterange')
                    .form-group
                        button.btn.btn-primary Search
            .card-body
                table.table.table-bordered
                    thead
                        tr
                            th(class="text-center")
                              v-check(v-model="selectAll" name="check" type="checkbox" value="all")
                            th Name
                            th Date
                            th Duration
                            th Operating
                    tbody
                        tr(v-for="(i, index) in items")
                            td(class="text-center")
                              v-check(type="checkbox" v-model="selected" :value="index") 
                            td {{i.name}}
                            td {{i.date}}
                            td {{i.duration}}
                            td
                              button.btn.btn-sm.btn-default(type='button', data-toggle='modal', data-target='#modal') Detail
                              button.btn.btn-sm.btn-primary(type='button') Aprrove
                              button.btn.btn-sm.btn-default(type='button') Refuse
            .card-footer
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
              .pre {{selected}}

</template>
<script>
export default {
  data() {
    return {
      items: [],
      selected: [],
      checkAll: false
    };
  },
  methods: {},
  computed: {
    selectAll: {
      get: function() {
        return this.items ? this.selected.length == this.items.length : false;
      },
      set: function(value) {
        var selected = [];
        if (value) {
          selected = this.items.map((i, index) => {
            return index;
          });
        }

        this.selected = selected;
      }
    }
  },
  created: function() {
    this.items = [
      {
        name: "张三",
        date: "2016-10-31",
        duration: 1
      },
      {
        name: "张三",
        date: "2016-10-31",
        duration: 10
      },
      {
        name: "张三",
        date: "2016-10-31",
        duration: 3
      },
      {
        name: "张三",
        date: "2016-10-31",
        duration: 2
      }
    ];
  }
};
</script>
<style scoped>
</style>
