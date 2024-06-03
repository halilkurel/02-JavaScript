class Course {
    constructor(title, instructor, image) {
        this.title = title;
        this.instructor = instructor;
        this.image = image;
    }
}

class UI {
    addCourseToList(course) {
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
    clearControls() {
        const title = document.getElementById('title').value = "";
        const instructor = document.getElementById('instructor').value = "";
        const image = document.getElementById('image').value = "";
    }
    deleteCourse(element) {
        if (element.classList.contains('delete')) {
            element.parentElement.parentElement.remove();
        }
    }
    showAlert(message, clasName) {
        var alert = `
        <div class="alert alert-${clasName}">
            ${message}
        </div>
    `;
        const row = document.querySelector(".row");

        //beforeBegin, afterbegin, beforeEnd, afterEnd
        row.insertAdjacentHTML('beforebegin', alert);


        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

document.getElementById("new-course").addEventListener('submit', function (e) {

    const title = document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;

    //Course Objesi oluşturalım
    const course = new Course(title, instructor, image);

    //UI objesinin örnekle
    const ui = new UI();

    if (title === '' || instructor === '' || image === '') {
        ui.showAlert('Please complete the form', 'warning');
    }
    else {

        //Kurs listesine ekleme Yapmak Create
        ui.addCourseToList(course);

        //clear controls(UI tarafından olusturulmus bilgileri temizle)
        ui.clearControls();



        ui.showAlert('the course has been added','success');
    }




    e.preventDefault();
});



document.getElementById('course-list').addEventListener('click', function (e) {
    const ui = new UI();
    ui.deleteCourse(e.target);

    ui.showAlert('the course has been deleted','danger');
});