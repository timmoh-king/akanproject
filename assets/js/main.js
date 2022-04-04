/**
 * @Author: Your name
 * @Date:   2022-04-04 06:17:12
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-04-04 19:22:53
 */
function getFormInput(){
    var date = document.getElementById('dateInput').value
    const male = document.getElementById("maleRadio");
    const female = document.getElementById("femaleRadio");
    var dayIndex = new Date(date).getDay();

        //This one evaluates for the day of the week based on the day index
        const getDayName = (dayIndex) =>{
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            return days[dayIndex];
        }
        const dayName = getDayName(dayIndex)

        //This code block evaluates for the Male Akan Name based on the dayindex above.
        const getMaleAkanName = (dayIndex)=>{
            const names = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
            return names[dayIndex];
        }

        //This code block evaluates for the Feale Akan Name based on the dayindex above.
        const getFemaleAkanName = (dayIndex)=>{
            const names = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
            return names[dayIndex];
        }


        if(male.checked){
            var gender = 'Male'
            var akanName = getMaleAkanName(dayIndex)

        }else if(female.checked){
            var gender = 'Female'
            var akanName = getFemaleAkanName(dayIndex)
        }

        //Display Akan Name
        console.log(akanName)

        document.getElementById('displayName').innerHTML ='<div class="alert alert-success text-center" role="alert"> Congratulations!! Your Akan Name is: <span class="text-success">'+akanName+'</span> you are a <span class="text-info">'+gender+'</span> born on a <span class="text-primary">'+dayName+'</span> </div>'

}


