$(document).ready(function(){
    //VIEW SELECTION
    const MAX_MODULES = 6;
    let courses_added = 0; 
    const modules = [];   
    $('.add_module').click(function(){
        if(courses_added + 1 <= MAX_MODULES) {
            let new_button = `<div class=wrapmod_${courses_added}><button><input style="width:50%" id=module_${courses_added} type="text"/></button></div>`;
            $(this).attr('disabled', 'true'); 
            console.log(courses_added);
            if (courses_added > 1) {
                $(new_button).insertAfter(`.wrapmod_${courses_added - 1}`);
            }else{
                $('.view_selection').append(new_button);
            }
    }

        $(`#module_${courses_added}`).keyup(function(e){
            const code = e.key;
            if(code === "Enter") {
                if($(this).val().trim()){
                    $('.add_module').removeAttr('disabled');
                    courses_added++;
                    e.preventDefault();
                    const subjectInformation = $(this).val().trim();
                    modules.push(subjectInformation);
                    console.log(modules);
                    $(this).css({display: "none"}).parent().text(subjectInformation);
                }
            }
        });
    });

    //ADD TASK VIEW
    let date = new Date();
    const loadedTime = date.getHours() + ":" + date.getMinutes();

    $('.datepicker').flatpickr({
        enableTime: true,
        dateFormat: "d-m-Y H:i",
        altInput: true,
        minDate: "today",
        minTime :  loadedTime
    });

        //TASK CLASS

        class Task{
            constructor(_taskName){
                this.taskName = _taskName;
            }
             
            set setDesc(_desc){
                this.desc = desc;
            }

            
        }

});