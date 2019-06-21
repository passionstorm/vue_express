<template lang="pug">
    .container-fluid
        .card
            .card-header
            .card-body
                form(action='')
                    .form-group
                        label(for='date') Date
                        input.form-control(type='text', name='daterange')
                    .form-group
                        label(for='duration') Duration (hours)
                        div
                            input#duration.form-control(type='number', name='duration', placeholder='duration')
                    .form-group
                        label Remarks
                        textarea.form-control(rows='3', placeholder='Please enter text', style='resize: none')
                    .form-group
                        button.btn.btn-primary Submit
                    

</template>
