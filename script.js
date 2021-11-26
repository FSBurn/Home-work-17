const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "JackSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "AmalSmith",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "NoahSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "CharlieSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "EmilySmith",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "LeoSmith",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
];
class User  {
	constructor(human) {
		this.name = human.name;
		this.age = human.age;
		this.img = human.img;
		this.role = human.role;
		this.courses = human.courses ? human.courses : null;

	}
	render(){
		return `<div class="user">
            <div class="user__info">
                <div class="user__info--data">
                    <img src="images/users/${this.img}.png" alt="${this.name}" height="50">
                    <div class="user__naming">
                        <p>Name: <b>${this.name}</b></p>
                        <p>Age: <b>${this.age}</b></p>
                    </div>
                </div>
                <div class="user__info--role ${this.role}">
                    <img src="images/roles/${this.role}.png" alt="${this.role}" height="25">
                    <p>${this.role}</p>
                </div>
            
        </div> `
	}
	renderCourses(){
		if(this.courses){
			return `<div class="user__courses">
				${this.courses
					.map(course => {
						return `<p class="user__courses--course ${this.role}">${course.title}<span class="${this.getMark(course.mark)}">${this.getMark(course.mark)}</span></p>`
					}).join(``)}
			</div>`
		}
		return '';

	}
	getMark(arg){
		if(arg <= 20){
			return this.mark = gradation["20"]
		}else if(arg <= 55){
			return  this.mark = gradation["55"]
		}
		else if(arg <= 85){
			return  this.mark = gradation["85"]
		}
		else if(arg <= 100){
			return  this.mark = gradation["100"]
		}
	}
}
class Student extends User{
	constructor(human) {
		super(human);

	}

}
class Lector extends User{
	constructor(human) {
		super(human);
	}
	renderCourses(){
		if(this.courses){
			return `<div class="user__courses">
				${this.courses
				.map(course => {
					return `<div class="user__courses admin--info">
                <div class="user__courses--course ${this.role}">
                    <p>Title: <b>${course.title}</b></p>
                    <p>Lector's score: <span class="${this.getScore(course.score)}">${this.getScore(course.score)}</span></p>
                    <p>Average student's score: <span class="${this.getStudentsScore(course.studentsScore)}">${this.getStudentsScore(course.studentsScore)}</span></p>
                </div>
                
            </div>`
				}).join(`&nbsp &nbsp`)}
			</div>`
		}
		return '';

	}
	getScore(arg){
		if(arg <= 20){
			return this.score = gradation["20"]
		}else if(arg <= 55){
			return  this.score = gradation["55"]
		}
		else if(arg <= 85){
			return  this.score = gradation["85"]
		}
		else if(arg <= 100){
			return  this.score = gradation["100"]
		}
	}
	getStudentsScore(arg){
		if(arg <= 20){
			return this.studentsScore = gradation["20"]
		}else if(arg <= 55){
			return  this.studentsScore = gradation["55"]
		}
		else if(arg <= 85){
			return  this.studentsScore = gradation["85"]
		}
		else if(arg <= 100){
			return  this.studentsScore = gradation["100"]
		}
	}


}
class Admin extends User{
	constructor(human) {
		super(human);
	}
	renderCourses(){
		if(this.courses){
			return `<div class="user__courses">
				${this.courses
				.map(course => {
					return `<div class="user__courses admin--info">
                <div class="user__courses--course ${this.role}">
                    <p>Title: <b>${course.title}</b></p>
                    <p>Admin's score: <span class="${this.getMark(course.score)}">${this.getMark(course.score)}</span></p>
                    <p>Lector: <b>${course.lector}</b></p>
                </div>
                
            </div>`
				}).join(`&nbsp &nbsp`)}
			</div>`
		}
		return '';
	}

}

const userRole = {
	student: human => new Student(human),
	lector: human => new Lector(human),
	admin: human => new Admin(human)
}
users
	.map(human =>{
	return userRole[human.role] ? userRole[human.role](human) : new User(human);

})
	.forEach(human => document.write(`<div class="users">${human.render()} ${human.renderCourses()}</div>`));
