//Sınıf constructor 
function Course(title,instructor,image){
    this.title = title;
    this.instructor = instructor;
    this.image = image;
}

//UI constructor
function UI(){

}

//5-3 ve 4 için prototype olusturalım
UI.prototype.addCourseToList = function(course){
    const list = document.getElementById('course-list');

    var html = `
         <tr>
            <td><img src="images/${course.image}"/></td>
            <td>${course.title}</td>
            <td>${course.instructor}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
         </tr>    
    `;

    list.innerHTML += html;
}

UI.prototype.clearControls = function(){
    const title = document.getElementById('title').value="";
    const instructor = document.getElementById('instructor').value="";
    const image = document.getElementById('image').value="";
}

//2-
UI.prototype.deleteCourse = function(element){
    if(element.classList.contains('delete')){
        element.parentElement.parentElement.remove();
    }
}


document.getElementById("new-course").addEventListener('submit',function(e){

    const title = document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;

    //Course Objesi oluşturalım
    const course = new Course(title,instructor,image);

    //UI objesinin örnekle
    const ui = new UI();

    //Kurs listesine ekleme Yapmak Create
    ui.addCourseToList(course);

    //clear controls(UI tarafından olusturulmus bilgileri temizle)
    ui.clearControls();



    e.preventDefault();
});


//1-
document.getElementById('course-list').addEventListener('click',function(e){
    const ui = new UI();
    ui.deleteCourse(e.target);
});