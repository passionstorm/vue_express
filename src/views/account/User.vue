<template lang="pug">
    .container-fluid
        .card
            .card-header
            form
                .card-body
                    .form-group
                        label Role
                        .input-group
                            label.checkbox-inline 
                                input(type="radio" name="role") 
                                | Admin
                            label.checkbox-inline 
                                input(type="radio" name="role") 
                                | Staff
                            label.checkbox-inline   
                                input(type="radio" name="role")   
                                | Member
                    .form-group
                        label name
                        input.form-control
                    .form-group
                        label Username
                        input.form-control
                    .form-group
                        label Password
                        input.form-control    
                    .form-group
                        label Retype password
                        input.form-control      
                    .form-group
                        label Email
                        input.form-control    
                    .form-group
                        label Salary
                        input.form-control(type="number")    
            .card-footer
</template>
<script>
export default {
}
</script>

