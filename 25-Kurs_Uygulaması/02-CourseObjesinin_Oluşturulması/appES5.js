//2-Sınıf oluşturalım
function Course(title,instructor,image){
    this.title = title;
    this.instructor = instructor;
    this.image = image;
}



//1-
document.getElementById("new-course").addEventListener('submit',function(e){

    const title = document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;

    //3-Course Objesi oluşturalım
    const course = new Course(title,instructor,image);




    e.preventDefault();
});