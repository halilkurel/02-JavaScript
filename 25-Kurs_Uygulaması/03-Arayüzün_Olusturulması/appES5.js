//Sınıf constructor 
function Course(title,instructor,image){
    this.title = title;
    this.instructor = instructor;
    this.image = image;
}

//1-UI constructor
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
            <td><a href="#" class="btn btn-danger btn-sm">Delete</a></td>
         </tr>    
    `;

    list.innerHTML += html;
}

UI.prototype.clearControls = function(){
    const title = document.getElementById('title').value="";
    const instructor = document.getElementById('instructor').value="";
    const image = document.getElementById('image').value="";
}


document.getElementById("new-course").addEventListener('submit',function(e){

    const title = document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;

    //Course Objesi oluşturalım
    const course = new Course(title,instructor,image);

    //2-UI objesinin örnekle
    const ui = new UI();

    //3- Kurs listesine ekleme Yapmak Create
    ui.addCourseToList(course);

    //4-clear controls(UI tarafından olusturulmus bilgileri temizle)
    ui.clearControls();



    e.preventDefault();
});