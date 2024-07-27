import React from "react";
import './button.css'

function loginButton(buttonName) {
  return <button className="login">{buttonName}</button>
}
function socialMedia(buttonName) {
  return <button className="social">{buttonName}</button>
}
function userType(buttonName) {
  return <button className="userButton">{buttonName}</button>
}
function socialMediaLink(buttonName) {
  return <button className="socialLink">{buttonName}</button>
}
function SearchBox(innerText) {
  return <div className="searchBox">
    <input type="text" placeholder={innerText} />
  </div>
}
function Heading1(innerText) {
  return <h1 className="Heading1">{innerText}</h1>
}
function Search(innerText) {
  return <button className="searchButton">{innerText}</button>
}
function Heading2(innerText) {
  return <h2 className="Heading2">{innerText}</h2>
}
function orderButton(innerText) {
  return <button className="orderButton">{innerText}</button>
}
function greeting(innerText) {
  return <div>
  <p className="greeting">{innerText}</p>
  </div>
}
function userDetails(value) {
    return <input className="userDetails" placeholder={value} />;
}
function Requirments(value) {
    return <button className="Requirments">{value}</button>
}
function rectriangle(value) {
    return (
        <div  className='rectrianglee'>{value}</div>
    );
}
function view(innerText){
    return <button className="view">{innerText}</button>
}
function DashButton(innerText){
    return <button className="DashButton">{innerText}</button>
}
function paraDec(){
    return   <p>
    Title: Mastering HR Fundamentals: A Comprehensive Guide to Human Resources <br/>

Introduction:<br/>

Are you eager to embark on a rewarding career in Human Resources? Or perhaps you're already working in HR but want to strengthen your foundational knowledge and skills? Look no further! Our course, "Mastering HR Fundamentals," is your gateway to understanding the core principles and practices that drive success in the dynamic field of Human Resources.<br/>

Description:<br/>

Human Resources is the backbone of any organization, playing a pivotal role in shaping company culture, managing talent, and driving organizational success. Whether you're an aspiring HR professional or a seasoned practitioner seeking to refresh your skills, this course is designed to provide you with a comprehensive understanding of HR fundamentals.<br/>

In this course, you will delve into key areas such as recruitment and selection, employee relations, performance management, compensation and benefits, and HR laws and regulations. Through engaging lectures, real-world case studies, and interactive exercises, you will gain practical insights and strategies that you can apply immediately in your HR role.<br/>

Course Highlights:<br/>

Recruitment and Selection: Learn the art of attracting top talent, conducting effective interviews, and making the right hiring decisions to build high-performing teams.<br/>

Employee Relations: Master the skills needed to foster positive workplace relationships, handle employee conflicts, and promote a culture of respect and collaboration.<br/>

Performance Management: Explore best practices for setting goals, providing feedback, and evaluating employee performance to drive individual and organizational growth.<br/>

Compensation and Benefits: Understand the principles of total rewards, including salary structures, incentives, and employee benefits, to attract and retain top talent.<br/>

HR Laws and Regulations: Stay up-to-date with the latest legal requirements and compliance issues affecting the workplace, ensuring that your HR practices are ethical and lawful.<br/>

Who Should Enroll:<br/>

Aspiring HR professionals looking to kickstart their career in Human Resources.
Current HR practitioners seeking to deepen their understanding of core HR concepts and enhance their skill set.
Managers and business owners who want to gain insights into HR practices to better manage their teams and businesses.
Join us on this transformative journey and unlock your potential as a strategic HR leader. Enroll in "Mastering HR Fundamentals" today and take the first step towards a successful career in Human Resources!<br/>
    </p>
}
function applyButton(innerText){
    return <button className="applyButton">{innerText}</button>
}
function note(innerText) {

    return (
      <p className="note">{innerText}</p>
    )
}

export {loginButton, socialMedia, userType, socialMediaLink,SearchBox,Heading1,Search,Heading2,orderButton,greeting,userDetails,Requirments, rectriangle,view,DashButton, paraDec, applyButton,note};