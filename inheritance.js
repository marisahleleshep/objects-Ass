
class Car {
  constructor(make, model, year, isAvailable) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = isAvailable;
  }
  toggleAvailability() {
    this.isAvailable = !this.isAvailable;
  }
}


class Rental {
  constructor(car, renterName, rentalStartDate, rentalEndDate) {
    this.car = car;
    this.renterName = renterName;
    this.rentalStartDate = rentalStartDate;
    this.rentalEndDate = rentalEndDate;
  }
  calculateRentalDuration() {
    const ONE_DAY_MS = 24 * 60 * 60 * 1000;
    const startMs = this.rentalStartDate.getTime();
    const endMs = this.rentalEndDate.getTime();
    const durationMs = endMs - startMs;
    const durationDays = Math.ceil(durationMs / ONE_DAY_MS);
    return durationDays;
  }
}
const car = new Car("Toyota", "Camry", 2020, true);
const rental = new Rental(car, "John Doe", new Date("2023-05-01"), new Date("2023-05-04"));
const rentalDuration = rental.calculateRentalDuration();
console.log(rentalDuration);


// QUestion 2
class Question {
    constructor(text, options, correctAnswer) {
      this.text = text;
      this.options = options;
      this.correctAnswer = correctAnswer;
    }
    checkAnswer(answer) {
      return answer === this.correctAnswer;
    }
  }
  class Quiz {
    constructor() {
      this.questions = [];
      this.currentQuestionIndex = 0;
      this.score = 0;
    }
    addQuestion(question) {
      this.questions.push(question);
    }
    nextQuestion() {
      this.currentQuestionIndex++;
    }
    submitAnswer(answer) {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      if (currentQuestion.checkAnswer(answer)) {
        this.score++;
      }
      this.nextQuestion();
    }
  }
  const question1 = new Question(
    "What is the capital of France?",
    ["Berlin", "London", "Paris", "Madrid"],
    "Paris"
  );
  const question2 = new Question(
    "What is the largest planet in the solar system?",
    ["Earth", "Jupiter", "Mars", "Venus"],
    "Jupiter"
  );
  const quiz = new Quiz();
  quiz.addQuestion(question1);
  quiz.addQuestion(question2);
  quiz.submitAnswer("Paris");
  quiz.submitAnswer("Jupiter");
  console.log(quiz.score);


