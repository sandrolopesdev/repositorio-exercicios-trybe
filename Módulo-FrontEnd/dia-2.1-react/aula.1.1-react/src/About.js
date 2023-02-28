import React from "react";

class About extends React.Component {
  render() {
    const hardSkills = ['HTML', 'CSS', 'JavaScript', 'Jest', 'JavaScript Assíncrono'];

    return (
      <div>
        <h1>Sandro Lopes Filho</h1>
        <p>Goiâno morando em São Paulo, sofrendo e trabalhando na Atento.</p>
        <h2>
          <ul>
            {
              hardSkills.map((skill) => <li>{ skill }</li>)
            }
          </ul>
        </h2>
      </div>

    );
  }
}

export default About;
