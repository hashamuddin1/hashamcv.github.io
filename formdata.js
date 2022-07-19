//add experience's fields by click on add button
function addexpfield() {
    document.getElementById('item3').innerHTML += '<div><label>Company Name</label></div><div><input type="text" class="inp exp cname" autocomplete="off" name="cname"></div><div><label>Starting Date</label></div><div><input type="date" class="inp exp startdate" autocomplete="off" name="startdate"></div><div><label>Ending Date</label></div><div><input type="date" class="inp exp enddate" autocomplete="off" name="enddate"></div>'
}

addexp.addEventListener('click', addexpfield)

//add education field by click on add button
function addedufield() {
    document.getElementById('item5').innerHTML += '<div><label>Institude Name</label></div><div><input type="text" class="inp exp iname" autocomplete="off" name="iname"></div><div><label>Degree Name</label></div><div><input type="text" class="inp exp dname" autocomplete="off" name="dname"></div><div><label>Starting Date</label></div><div><input type="date" class="inp exp edustartdate" autocomplete="off" name="edustartdate"></div><div><label>Ending Date</label></div><div><input type="date" class="inp exp eduenddate" autocomplete="off" name="eduenddate"></div>'
}

addedu.addEventListener('click', addedufield);

//add skills field by click on add button
function addskillfield() {
    document.getElementById('item7').innerHTML += '<div><select class="selectskill"><option value="html5">Html 5</option><option value="css3">Css 3</option><option value="bootstrap">Bootstrap 5</option><option value="javascript">javascript</option><option value="php">Php</option><option value="react">React</option><option value="Angular">Angular</option><option value="Python">Python</option><option value="Machine Learning">Machine Learning</option><option value="Data Science">Data Science</option><option value="Power BI">Power BI</option><option value="Tableau">Tableau</option><option value="TypeScript">TypeScript</option><option value="Ruby">Ruby</option><option value="Java">Java</option><option value="C#">C#</option><option value="ASP .net">ASP .net</option><option value="Power Apps">Power Apps</option><option value="Sharepoint">Sharepoint</option><option value="Tkinter">Tkinter</option><option value="Element.js">Element.js</option><option value="Vue.js">Vue.js</option><option value="Node.js">Node.js</option><option value="Spring">Spring</option><option value="Laravel">Laravel</option><option value="Express.js">Express.js</option><option value="SQL">SQL</option><option value="Mongo DB">Mongo DB</option><option value="Graph QL">Graph QL</option><option value="React Native">React Native</option><option value="flutter">Flutter</option><option value="dart">Dart</option><option value="c++">C++</option><option value="Microsoft Dynamics 365">Microsoft Dynamics 365</option><option value="illustrator">Illustrator</option></select></div><div></div>'
}

addskill.addEventListener('click', addskillfield);

//add certificate field by click on add button
function addcertificatefield() {
    document.getElementById('item9').innerHTML += '<div><label>Institude Name</label></div><div><input type="text" class="inp exp icname" autocomplete="off" name="icname"></div><div><label>Issue Date</label></div><div><input type="date" class="inp exp certstartdate" autocomplete="off" name="certstartdate"></div><div>'
}

addcertificate.addEventListener('click', addcertificatefield);

//add languages field by click on add button
function addlanguagefield() {
    document.getElementById('item11').innerHTML += '<div><label>Language</label></div><div><input type="text" class="inp exp lang" autocomplete="off" name="lang"></div>'
}

addlanguage.addEventListener('click', addlanguagefield);

//get value
// function retreivedata() {
//     let firstname = document.getElementById("fname").value
//     let lastname = document.getElementById("lname").value
//     let fathername = document.getElementById("fathername").value
//     let Email = document.getElementById("email").value
//     let Address = document.getElementById("address").value
//     let Contact = document.getElementById("contact").value
//     let Description = document.getElementById("description").value
//     let company = document.getElementsByClassName("cname")
//     let Startdate = document.getElementsByClassName("startdate")
//     let Enddate = document.getElementsByClassName("enddate")
//     let lst1 = [];
//     for (var i = 0; i < company.length; i++) {
//         lst1.push({ company: company[i].value, startdate: Startdate[i].value, Enddate: Enddate[i].value })
//     }



//     console.log({ Firstname: firstname, Lastname: lastname, Fathername: fathername, Email: Email, Address: Address, Contact: Contact, Description: Description, Experience: lst1 })
// }

// btnsub.addEventListener('click', retreivedata)

function makecv() {
    let Description = document.getElementById("description").value;
    document.getElementById('header').innerHTML = "<h2>Profile Description</h2>" + Description
    let firstname = document.getElementById("fname").value
    let lastname = document.getElementById("lname").value
    let fathername = document.getElementById("fathername").value
    let Email = document.getElementById("email").value
    let Address = document.getElementById("address").value
    let Contact = document.getElementById("contact").value
    let Languages = document.getElementsByClassName("lang")
    let lst1 = [];
    for (var i = 0; i < Languages.length; i++) {
        lst1.push(Languages[i].value)
    }
    document.getElementById('langandperinfo').innerHTML = "<h2>Personal Info</h2><br/>" + `<div>First Name:${firstname}</div><br/>` + `<div>Last Name:${lastname}</div><br/>` + `<div>Father Name:${fathername}</div><br/>` + `<div>Email:${Email}</div><br/>` + `<div>Address:${Address}</div><br/>` + `<div>Contact:${Contact}</div><br/>` + "<h2>Languages</h2><br/>" + `${lst1}`;
    let Skill = document.getElementsByClassName("selectskill")
    let certif = document.getElementsByClassName("icname")
    let issuecer = document.getElementsByClassName("certstartdate")
    document.getElementById('skillsadd').innerHTML += "<div><h2>Skills</h2></div>";
    for (var i = 0; i < Skill.length; i++) {
        document.getElementById('skillsadd').innerHTML += `<div><ul><li>${Skill[i].value}</li></ul></div>`;
    }
    document.getElementById('skillsadd').innerHTML += "<div><h2>Certificate</h2></div>"
    for (var i = 0; i < certif.length; i++) {
        document.getElementById('skillsadd').innerHTML += `<div><ul><li>Certificate name: ${certif[i].value}</li><li>Issue Date: ${issuecer[i].value}</li></ul></div>`;
    }
    let instname = document.getElementsByClassName("iname")
    let degname = document.getElementsByClassName("dname")
    let degstart = document.getElementsByClassName("edustartdate")
    let degend = document.getElementsByClassName("eduenddate")
    document.getElementById('degeducer').innerHTML = "<div><h2>Education</h2></div>";
    for (var i = 0; i < instname.length; i++) {
        document.getElementById('degeducer').innerHTML += `<div><ul><li>Institude Name: ${instname[i].value}</li><li>Degree Name: ${degname[i].value}</li><li>Duration: ${degstart[i].value}-${degend[i].value}</li></ul></div>`;
    }
    let compname = document.getElementsByClassName("cname")
    let compstart = document.getElementsByClassName("startdate")
    let compend = document.getElementsByClassName("enddate")
    document.getElementById('degeducer').innerHTML += "<div><h2>Experience</h2></div>";
    for (var i = 0; i < compname.length; i++) {
        document.getElementById('degeducer').innerHTML += `<div><ul><li>Company Name: ${compname[i].value}</li><li>Duration: ${compstart[i].value}-${compend[i].value}</li></ul></div>`;
    }
}

btncv.addEventListener('click', makecv)


//downoad cv
window.onload = function() {
    document.getElementById("downloadcv").addEventListener('click', () => {
        const Main = this.document.getElementById("main");
        html2pdf().from(Main).save();
    })
}