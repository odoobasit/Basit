import React, { Component } from 'react';
import '../../App.css';
import '../../css/bootstrap.min.css';
import swal from 'sweetalert';
import ShowQuiz from '../ShowQuiz/ShowQuiz';
import QuizInfo from '../QuizInfo/QuizInfo';
import Quiz from '../Quiz/Quiz';

class Sign extends Component {
    constructor(props) {
    super();

    this.state = {
      use: false,
      signUp: false,
      user: false,
      giveQuiz: null,
      quiz: null,
      quizzes: [
        {
          name: 'HTML', quiz: [
            {
              quizName: 'Quiz 1', key: 'htmlquiz1', marks: 10, no: 2, questions: [
                { question: 'What does HTML stand for?', options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language'], answer: 'Hyper Text Markup Language' },
                { question: 'Choose the correct HTML tag to make a text bold', options: ['bold', 'b', 'bb'], answer: 'b' }
              ]
            },
            {
              quizName: 'Quiz 2', key: 'htmlquiz2', marks: 10, no: 2, questions: [
                {
                  question: 'How can you open a link in a new browser window?', options: ['A href="url" target="_blank"', 'A href="url" target="new"', 'A href = "url" target = _window"'], answer: 'A href="url" target="_blank"' },
                { question: 'What is the name of every homepage on the WWW?', options: ['Home.html', 'Index.html', 'Anything you want it to be.html'], answer: 'Index.html' }
              ]
            }
          ]},
        
        {
          name: 'CSS', quiz: [
            {
              quizName: 'Quiz 1', key: 'cssquiz1', marks: 10, no: 2, questions: [
                {
                  question: 'What does CSS stand for?', options: ['Creative Style Sheets', 'Colorful Style Sheets', 'Cascading Style Sheets'], answer: 'Cascading Style Sheets' },
                {
                  question: 'How do you insert a comment in a CSS file?', options: ['/* this is a comment */', '// this is a comment'], answer: '/* this is a comment */' }
              ]
            },
            {
              quizName: 'Quiz 2', key: 'cssquiz2', marks: 10, no: 2, questions: [
                {
                  question: 'Which CSS property controls the text size?', options: ['Font-style', 'Font-size', 'text-size'], answer: 'Font-size' },
                {
                  question: 'How do you make a list that lists its items with squares?', options: ['List-style-type: square', 'List-type: square'], answer: 'List-style-type: square' }
              ]
            }
          ] 
        },
        
        { 
          name: 'JavaScript', quiz: [
            {
              quizName: 'Quiz 1', key: 'jsquiz1', marks: 10, no: 2, questions:[
            { question: 'Which built-in method returns the length of the string?', options: ['length()', 'size()', 'index()'], answer: 'length()'},
            { question: 'Inside which HTML element do we put the JavaScript?', options: ['<javascript>', '<script>', '<js>'], answer: '<script>'}
          ]}, 
          {
            quizName: 'Quiz 2', key: 'jsquiz2', marks: 10, no: 2, questions: [
            { question: 'What is the correct syntax for referring to an external script called "xxx.js"?', options: ['<script src="xxx.js">', '<script href="xxx.js">', '<script name="xxx.js">'], answer: '<script href="xxx.js">' },
            { question: 'The external JavaScript file must contain the <script> tag.', options: ['True', 'false'], answer: 'false' }
          ]}
        ]},

        {
          name: 'React', quiz: [
            {
              quizName: 'Quiz 1', key: 'reactquiz1', marks: 10, no: 2, questions: [
                { question: 'Which built-in method returns the length of the string?', options: ['length()', 'size()', 'index()'], answer: 'length()' },
                { question: 'Inside which HTML element do we put the JavaScript?', options: ['<javascript>', '<script>', '<js>'], answer: '<script>' }
              ]
            },
            {
              quizName: 'Quiz 2', key: 'reactquiz2', marks: 10, no: 2, questions: [
                { question: 'What is the correct syntax for referring to an external script called "xxx.js"?', options: ['<script src="xxx.js">', '<script href="xxx.js">', '<script name="xxx.js">'], answer: '<script href="xxx.js">' },
                { question: 'The external JavaScript file must contain the <script> tag.', options: ['True', 'false'], answer: 'false' }
              ]
            }
          ] },
        
    ]// quizzes end
  }// this.state end
    

    this.signUp = this.signUp.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
    this.userSign = this.userSign.bind(this);
    this.change = this.change.bind(this);
    this.check = this.check.bind(this);
    this.back = this.back.bind(this);
    this.showDetails = this.showDetails.bind(this);
    this.showQuiz = this.showQuiz.bind(this);
    this.startQuiz = this.startQuiz.bind(this);
  }

  signUp(){
    
    var get_user = JSON.parse(localStorage.getItem("users"));
    // debugger
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var arr = [];
    var user = {};
    var a = [];

    user = { name, email, password };

    if (get_user) {
      for (let i = 0; i < get_user.length; i++) {
        arr.push(get_user[i]);
      }
    }
    
    

    if (!name || !email || !password ) {
      swal("Fill all the fields", "", "warning");
    }
    else if (password.length < 5) {
      swal('Password should contain 5 character','','warning');
    }
    else {

      if (get_user) {

        for (let j = 0; j < get_user.length; j++) {
          if (get_user[j].email === email) {
            swal("Email already exists", "", "warning");
            break
            // arr.push(get_user);
            debugger
            arr.push(user);

            localStorage.setItem("users", JSON.stringify(arr));
            swal("SignUp succesful", "", "success");

            this.setState({
              signUp: false
            })
          }

          arr.push(user);
          localStorage.setItem("users", JSON.stringify(arr));
          swal("SignUp succesful", "", "success");

          this.setState({
            signUp: false
          })
          break;
        }

      }
      else{

        // arr.push(get_user);
        debugger
        arr.push(user);

        localStorage.setItem("users", JSON.stringify(arr));
        swal("SignUp succesful", "", "success");

        this.setState({
          signUp: false
        })

      }

      }
    
  }

  signIn() {
    var get_user = JSON.parse(localStorage.getItem("users"));

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    for (let i = 0; i < get_user.length; i++) {
      
      if (get_user[i].email === email && get_user[i].password === password) {
        swal("SignIn successful", "", "success");
  
        this.setState({
          use: true,
          signUp: true
        })
        localStorage.setItem('name',get_user[i].name);
        localStorage.setItem('signIn', get_user[i].email);
        localStorage.setItem('email',get_user[i].email);
        break;
      }
      else {
        swal("SignUp unsuccessful", "", "error");
      }
      
    }

  }

  signOut(){
    this.setState({
      use: false,
      signUp: false,
      giveQuiz: false
    })
    localStorage.setItem("signIn","");
  }

  userSign(){
    var availible = localStorage.getItem("signIn");
    var get_email = localStorage.getItem("email");
    // debugger
    if (availible === null) {
      
    }
    else if (availible === get_email) {
      this.setState({
        use: true,
        signUp: true
      })
    }
  }

  change(){
    this.setState({
      signUp: true
    })
  }

  check() {
    document.getElementById('ab');
    var get_email = localStorage.getItem("email");
    if (!get_email) {
      
    }
    else{
      this.setState({
        use: true,
        signUp: true
      })
    }
  }

  showQuiz() {

    this.setState({
      quiz: null,
    })

  }

  showDetails(index) {
    const { quizzes } = this.state;

    this.setState({
      quiz: quizzes[index]
    })
    debugger

  }

  startQuiz(index){
    const { quiz } = this.state;

    this.setState({
      giveQuiz: quiz.quiz[index],
      use: false
    })
  debugger
  }

  back(){
    this.setState({
      giveQuiz: null,
      use: true
    })
  }

  renderSignUp(){
    return(
      <div className="panel panel-primary" id="signup">
        <div className="panel-heading">
          <h2 align="center">Sign Up</h2>
        </div>
        <div className="panel-body">

          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" id="name" placeholder="Name" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" required />
          </div>

          <button className="btn btn-primary" onClick={this.signUp}>Submit</button>

        </div>
      </div>
    )
  }

  renderSignIn() {
    return (
      <div className="panel panel-primary" id="signup" onLoad={this.userSign()}>
        <div className="panel-heading">
          <h2 align="center">Sign In</h2>
        </div>
        <div className="panel-body">

          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" required />
          </div>

          <button className="btn btn-primary" onClick={this.signIn}>Submit</button> Don't have a account click <a onClick={this.change}>here</a>

        </div>
      </div>
    )
  }

  render() {
    const { use, signUp, quiz, quizzes, giveQuiz} = this.state;
    console.log('Sign props => ', this.props);
// debugger

    return (
      <div>
        <div id="ab">
          {!use && !signUp && !giveQuiz && this.renderSignIn()}
          {!use && signUp && !giveQuiz && this.renderSignUp()}
          {use && signUp && !quiz && <ShowQuiz quiz={quizzes} onPress={this.showDetails} signOut={this.signOut} />}
          {use && signUp && quiz && <QuizInfo quiz={quiz} onBack={this.showQuiz} start={this.startQuiz} />}
          {giveQuiz && <Quiz startquiz={giveQuiz} back={this.back} />}
          
        </div>
      </div>
    );
  }
}

export default Sign;
