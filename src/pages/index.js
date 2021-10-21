import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            {config.lead}
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Enterprise Staff Architect / Persistence Domain</h3>
              <div className="subheading mb-3">Kohl’s Department Stores</div>
              <ul>
                <li>
                  Evaluating internal functions, business development strategies, and IT processes and suggesting improvements.
                </li>
                <li>
                  Creating business architecture models to reflect the organization's strategies and goals.
                </li>
                <li>
                  Suggesting ideas to reduce costs.
                </li>
                <li>
                  Organizing training to improve employees' knowledge and skills for future organizational growth.
                </li>
                <li>
                  Providing business architecture and systems processing guidance.
                </li>
                <li>
                  Ensuring the efficiency, security, and support of the organization's goals.
                </li>
                <li>
                  Determining and implementing build versus buy strategies.
                </li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <h5 className="text-primary">February 2020 - Present</h5>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Sr. Database Administrator / Platform Engineer</h3>
              <h3 className="mb-0">MySQL Database Administrator / Platform Engineer</h3>

              <div className="subheading mb-3">Kohl’s Department Stores</div>
              <ul>
                <li>
                  Extensive experience architecting, designing, and supporting highly available MySQL databases in an Google Cloud environments.
                </li>
                <li>
                  Designed, developed and support automation tools used to deploy MySQL, NDB and MySQL Enterprise Monitor.
                </li>
                <li>
                  Developed monitoring dashboards, alerts for cloud base databases using MySQL Enterprise Monitor.
                </li>
                <li>
                  Lead in the execution and development of MySQL automation framework based on Ansible and Python.
                </li>
                <li>
                  Ensures automation handles all appropriate compliance and security requirements.
                </li>
                <li>
                  Experience with infrastructure as code tools such as Ansible, Packer, Terraform, and Puppet, Python.
                </li>
                <li>
                  Experience using CICD tools such as Jenkins.
                </li>
                <li>
                  Experience with open source tools  as Packer, Consul, Vault.
                </li>
                <li>
                  Experience using Git and GitHub.
                </li>
                <li>
                  Experience working in DevOps/Agile environment and strong collaboration skills.
                </li>
                <li>
                  Supported installations, patching, upgrades, and disaster recovery for kohls.com.
                </li>
                <li>
                  Helped with provide data migration strategy of Oracle to MySQL.
                </li>
                <li>
                  Reviewed viability of container based database deployments on Kubernetes and OpenShift platforms.
                </li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <h5 className="text-primary">March 2018 - January 2020</h5>
              <h5 className="text-primary">January 2017 - March 2018</h5>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Oracle Database Administrator</h3>
              <div className="subheading mb-3">Kohl’s Department Stores</div>
              <ul>
                <li>
                  Supported Kohls.com Oracle databases.
                </li>
                <li>
                  Efficient in enterprise monitoring tools like Oracle OEM.
                </li>
                <li>
                  Provided performance tuning when needed.
                </li>
                <li>
                  Helped implement database security products (Oracle Redaction, TDE encryption, custom scrubbing scripts).
                </li>
                <li>
                  Developed automation for Oracle installation in 1000+  remote stores.
                </li>
                <li>
                  Supported automation for 140 Oracle development environments.
                </li>
                <li>
                  Experience deploying to VMware
                </li>
                <li>
                  Oracle Standby / Failover Administration.
                </li>
                <li>
                  Experience with Oracle Exadata/RAC systems.
                </li>
                <li>
                  Managed and review database schema objects like tables, indexes and views .
                </li>
                <li>
                  Acted as first and second level support for production issues providing 24x7 support and uptime.
                </li>
                <li>
                  Provided on call support for production and development issues.
                </li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <h5 className="text-primary">January  2012 - January 2017</h5>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Developer – Ecommerce Service Delivery</h3>
              <div className="subheading mb-3">Kohl’s Department Stores</div>
              <ul>
                <li>
                  Research application problems and provide solutions to minimize the impact to interfacing systems
                </li>
                <li>
                  Fix problems to existing applications
                </li>
                <li>
                  Perform troubleshooting tasks
                </li>
                <li>
                  Conduct code reviews
                </li>
                <li>
                  Work with development team members on new projects
                </li>
                <li>
                  Provide On-call support for production applications (kohls.com)
                </li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <h5 className="text-primary">May 2010 - January 2012</h5>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">.Net Developer</h3>
              <div className="subheading mb-3">The Benefit Services Group, Inc.</div>
              <ul>
                <li>
                  Assist with internal computer hardware issues
                </li>
                <li>
                  Participate in the overall planning, direction and coordination of clients’ employee benefits related website document management, website design, application design and development, and database design and management
                </li>
                <li>
                  Participate in the creation of the graphics, layouts, database design content and dynamic content of our clients’ employee benefits related websites and data management programs
                </li>
                <li>
                  Plan, coordinate and implement benefit enrollments, extranet sites and employee self-services sites, working with BSG’s Analytical Services department or outside vendors if needed
                </li>
                <li>
                  Develop and present IT recommendations by evaluating current applications and Analyze and evaluate IT applications and formulate recommendations
                </li>
                <li>
                  Manage tasks and projects from multiple clients simultaneously while meeting designated deadlines and standards
                </li>
                <li>
                  Identify, evaluate and resolve client issues within prescribed timeframes and guidelines
                </li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <h5 className="text-primary">May 2007 - May 2010</h5>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Technical Support Specialist – ID Systems</h3>
              <div className="subheading mb-3">HellermannTyton</div>
              <ul>
                <li>
                  Maintain, develop, and grow software and printer systems
                </li>
                <li>
                  Website maintenance
                </li>
                <li>
                  Provide tech support for software and thermal transfer printers
                </li>
                <li>
                  Ensure inventory is in place and backup units are available for repair
                </li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <h5 className="text-primary">November 2006 - May 2007</h5>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">University of Wisconsin Oshkosh</h3>
              <div className="subheading mb-3">Bachelor of Computer Science</div>
              <ul>
                <li>
                  {/* <i class="fa-li fas fa-circle"></i> */}
                  Swimming and Diving Team
                </li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <h5 className="text-primary">May 2006</h5>
            </div>
          </div>
        </div>
      </section>

      {/* <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>

          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-python"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-linux"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-gitlab"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-github"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-git"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-google"></i>
            </li>
            <li className="list-inline-item">
              <i class="fas fa-database"></i>
            </li>
            
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>

            <i class="fab fa-jira"></i>
            <i class="fab fa-kaggle"></i>


            <i class="fab fa-java"></i>
            <i class="fab fa-markdown"></i>

            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-less"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-gulp"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-grunt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" /> */}

      {/* <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy most of my time being
            outdoors. In the winter, I am an avid skier and novice ice climber.
            During the warmer months here in Colorado, I enjoy mountain biking,
            free climbing, and kayaking.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring chef, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </section> */}

      <hr className="m-0" />

    </div>
  </Layout>
);

export default IndexPage;
