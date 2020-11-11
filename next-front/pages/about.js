import Layout from "../components/Layout";

const json = {
    "pronouns": "He",
    "code": [
        "Javascript", "Typescript",
        "Go", "Dart",
        "Java",
        "Bash", "HTML"
    ],
    "askMeAbout": ["FullStack Dev", "App Dev"],
    "technologies": {
        "editors": ["VSCode", "Visual Studio"],
        "mobileApp": ["Flutter", "Ionic", "Android", "iOS", "Cordova"],
        "frontEnd": {
            "js": [
                "ES6", "Angular",
                "AngularJs",
                "npm", "grunt",
                "gulp", "webpack",
                "storybook"
            ],
            "css": [
                "Bootstrap", "Bulma",
                "Angular Material", "SASS",
                "FlexBox"
            ],
        },
        "backEnd": {
            "js": ["NodeJs", "express", "got", "handlebars"],
            "go": ["mux"],
            "java": ["Spring Boot"]
        },
        "testing": {
            "js": [
                "Jest", "Jasmine",
                "Karma", "MochaJs"
            ],
        },
        "devOps": [
            "Openshift",
            "Docker", "GitlabCI",
            "Jenkins"
        ],
        "databases": [
            "PostgreSQL", "MongoDB",
            "MySql", "SQL Server", "sqlite"
        ],
        "misc": [
            "git", "OpenApi",
            "WebSockets","Postman"
        ],
    }
};

const About = () => {
    return (
        <Layout>
            <h3>Ricardo Trejo Sanjuan</h3>
            <p></p>
            <p>Curious and passionate person with ease to express my opinion and thoughts about any topic. I consider myself as a great admirer of IT and software development, as well as the impact it has in our daily lives. I focus my formation like Full Stack developer. My analytic and self-taught aptitudes allow me to solve problems efficiently and turn them into a software solution.</p>

            <h4>PROFESSIONAL EXPERIENCE</h4>
            <table>
                <tr>
                    <td width="20%">Full Stack Developer</td>
                    <td width="80%">
                        <b>Achievement highlights:</b>
                        <p>
                            - Contributed software engineering expertise in the development products through the software lifecycle, from requirements definition through successfully deployment.<br/>
                            - Provided user requirements analysis, design and programming supports for new features.<br/>
                            - Successfully generated back-end programming utilizing microservices NodeJS and GoLand.<br/>
                            - Successfully deployment and virtualized of environments using containers in Docker to deliver at Heroku and DigitalOcean.<br/>
                            - Created mobil applications for capturing  biometric fingerprint scanner, bank transactions through QR Code using frameworks like Ionic with angular and Flutter.<br/>
                            - Excelled design and modeling of database.<br/>
                            - Development of Web applications modular using angular framework.<br/>
                        </p>

                    </td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>trejosanjuanricardo@gmail.com</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>7717295675</td>
                </tr>
            </table>
            {/* <pre className="language-js" value="json"></pre> */}
        </Layout>
    );
};

export default About;