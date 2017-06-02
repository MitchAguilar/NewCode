import React from 'react';

import { Note } from './note/note.component.jsx';

export class Content extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      img: 'https://avatars3.githubusercontent.com/u/25367106?v=3&s=460',
      name: 'Mitch Aguilar',
      sub: 'Working with passion',
      bio: 'I want to create a better world.',
      skills: [{
        icon: 'python',
        title: 'A markov chain: predict text'
      }, {
        icon: 'javascript_badge',
        title: 'Almost everything i could imagine'
      }, {
        icon: 'github',
        title: 'My favorite social network'
      }, {
        icon: 'java',
        title: 'The ancestor from whom I learned many things'
      },{
        icon: 'npm',
        title: 'Many libraries for NodeJS'
      }, {
        icon: 'linux',
        title: 'My favorite SO'
      }, {
        icon: 'terminal',
        title: 'My best friend'
      }, {
        icon: 'ionic',
        title: 'A few applications published in the playstore.'
      }, {
        icon: 'go',
        title: 'My new challenge'
      }, ]
    };
  }

  render() {
    return (
      <div className="content tooltip">
        <div className="card">
          <div className="firstinfo">
            <img src={this.state.img} />
            <div className="profileinfo">
              <h1>{this.state.name}</h1>
              &nbsp;
              <h3>{this.state.sub}</h3>
              <p className="bio">{this.state.bio}</p>

              <div className="container">
                <button className="btn"><span>Social</span><i className="material-icons">Netwoks</i>
                  <ul className="dropdown">
                    <li>
                      <a href="https://www.npmjs.com/~mitch_aguilar_" target="blank">NPM</a>
                    </li>
                    <li>
                      <a href="https://twitter.com/Mitch_Aguilar_" target="blank">Twitter</a>
                    </li>
                    <li>
                      <a href="https://github.com/MitchAguilar" target="blank">Github</a>
                    </li>
                    <li>
                      <a href="https://medium.com/@MitchCode" target="blank">Medium</a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/channel/UCAd2FCkvHuNaZ-Z-rImkq1Q" target="blank">Youtube</a>
                    </li>
                  </ul>
                </button>
              </div>

            </div>
          </div>
        </div>
        <div className="badgescard">
          {
            this.state.skills.map((skill, i) => {
              return <Note key={i} icon={skill.icon} title={skill.title} />;
            })
          }
        </div>
      </div>
    );
  }
}
