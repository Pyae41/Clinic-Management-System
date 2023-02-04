$(document).ready(function(){
    $('#del_doc').click(function(){

        let message = confirm('Are you sure?');
    
        if(message){
            let id = $('#del_id').text();
    
            $.ajax({
                type: "post",
                url: "delete_doctor",
                data:{id: id},
                success: function (response) {
                    if(response != 'success'){
                        alert('success');
                        window.location.href = 'http://localhost/CMS/all_doctors.php';
                    }
                    else{
                       alert('fail');
                    }
                }
            });
        }
    });
    
    // delete patient 
    $('#patient_table .delete').click(function(){
    
        let message = confirm('Are you sure?');
    
        if(message){
            let td = $(this).closest('td');
            let id = td.attr("id");
    
            $.ajax({
                type: "post",
                url: "delete_patient",
                data: {id:id},
                success: function (response) {
                    if(response == "success"){
                        td.closest("tr").remove();
                    }
                    else{
                        alert('Cannot delete patient!');
                    }
                }
            });
            
        }
    });
})