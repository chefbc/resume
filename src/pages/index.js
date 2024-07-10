import React from 'react';

import Layout from '../components/Layout';

import downloadFile from '../assets/files/resume.pdf'

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
                  <i className={`${icon}`}></i>
                </a>
              );
            })}
            {/* <a key={downloadFile} href={downloadFile}>
              <i className="fas fa-download"></i>
            </a> */}
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
              <h3 className="mb-0">Staff Architect Data Science / Machine Learning</h3>
              <div className="subheading mb-3">Kohl’s Department Stores</div>
              <ul>
                <li>
                Modernize Data Science & Engineering Processes: Evaluate current workflows for data science and data engineering to identify opportunities for improvement and implement best practices for efficiency, scalability, and reduced operational costs.
                </li>
                <li>
                Develop & Deploy Cost-Effective ML Solutions on GCP: Design, architect, develop, and deploy production-ready ML solutions at enterprise scale leveraging Google Cloud Platform services (Vertex AI, BigQuery, Dataproc, etc.) while prioritizing cost optimization through service selection, resource management, and automated workflows.
                </li>
                <li>
                Collaborate for Business Impact: Partner with cross-functional teams to ensure deployed ML solutions effectively address business problems, measure success, and iterate for continuous improvement, including minimizing support costs through proactive monitoring and user education
                </li>
                <li>
                Champion Agile Practices: Advocate for and implement modern software development practices such as Test Driven Development (TDD) and Pair Programming to ensure code quality, collaboration, maintainability, and reduced development and maintenance costs.
                </li>
                <li>
                Drive Innovation & Efficiency with Cost-Consciousness: Evaluate emerging data science platforms and tools to continuously enhance the efficiency and effectiveness of current development practices, prioritizing solutions that offer cost benefits and reduced support needs.
                </li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <h5 className="text-primary">February 2022 - Present</h5>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Enterprise Staff Architect / Persistence Domain</h3>
              <div className="subheading mb-3">Kohl’s Department Stores</div>
              <ul>
                <li>
                Streamlined Operations for Growth: Evaluated internal functions, business development strategies, and IT processes, identifying opportunities to improve efficiency, reduce costs, and support future organizational growth, all while navigating the challenges of the COVID-19 pandemic.
                </li>
                <li>
                Architected for Scalability & Cost Savings: Created business architecture models that reflected the organization's strategies and goals, prioritizing cloud optimization to achieve cost savings and enable operations with a leaner staff.
                </li>
                <li>
                Up-skilled Workforce for Success: Organized training programs to enhance employee knowledge and skills critical for future growth, ensuring the workforce was equipped to adapt and thrive in a changing environment.
                </li>
                <li>
                Guided Cloud Adoption & System Efficiency: Provided strategic business architecture and systems processing guidance, focusing on transitioning to the cloud for agility, security, and operational efficiency.
                </li>
                <li>
                Delivered Value Throughout Crisis: Ensured the organization's goals were met throughout the pandemic by implementing a "build versus buy" strategy that balanced cost-effectiveness with maintaining necessary functionalities.This approach minimized disruptions and preserved business value despite a potentially reduced workforce.
                </li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <h5 className="text-primary">February 2020 - February 2022</h5>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Sr. Database Administrator / Cloud Platform Engineer</h3>
              <h3 className="mb-0">MySQL Database Administrator / Platform Engineer</h3>

              <div className="subheading mb-3">Kohl’s Department Stores</div>
              <ul>
                <li>
                Extensive Experience with Cloud-Native MySQL Management: Architect, design, and support highly available MySQL databases in Google Cloud Platform (GCP) environments, ensuring scalability, security, and performance.
                </li>
                <li>
                DevOps Automation Champion: Designed, developed, and supported automation tools using Python and Ansible to streamline deployments of MySQL, NDB, and MySQL Enterprise Monitor for increased efficiency and reduced manual effort.
                </li>
                <li>
                Cloud Monitoring & Alerting Expertise: Created comprehensive monitoring dashboards and alerts for cloud-based databases utilizing MySQL Enterprise Monitor, enabling proactive issue identification and resolution.
                </li>
                <li>
                Leadership in MySQL Automation Framework: Led the development and execution of a robust MySQL automation framework using Ansible and Python, guaranteeing adherence to compliance and security requirements.
                </li>
                <li>
                Infrastructure as Code (IaC) & CI/CD Proficient: Possess expertise in IaC tools like Ansible, Packer, Terraform, and Puppet, and leverage CI/CD tools like Jenkins to automate infrastructure provisioning and application deployments.
                </li>
                <li>
                Open Source Savvy: Utilize open-source tools like Packer, Consul, and Vault to enhance infrastructure management and security.
                </li>
                <li>
                Git & GitHub Expertise: Actively engage in version control and collaboration practices using Git and GitHub.
                </li>
                <li>
                DevOps/Agile Teamwork: Thrive in DevOps and Agile environments, fostering strong collaboration skills for successful project execution.          
                </li>
                <li>
                Proven Database Operations & Migration Experience: Supported installations, patching, upgrades, and disaster recovery for kohls.com, demonstrating operational excellence.
                </li>
                <li>
                Data Migration Strategy & Containerization Exploration: Contributed to developing a data migration strategy from Oracle to MySQL and investigated the viability of deploying container-based MySQL solutions on Kubernetes and OpenShift platforms, showcasing a forward-thinking approach.
                </li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <h5 className="text-primary">January 2017 - January 2020</h5>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Oracle Database Administrator</h3>
              <div className="subheading mb-3">Kohl’s Department Stores</div>
              <ul>
                <li>
                Extensive Oracle Database Management for Kohls.com: Supported the critical Oracle databases powering Kohls.com, ensuring smooth operation, performance, and security.
                </li>
                <li>
                Performance Optimization & Monitoring Expertise: Utilized enterprise monitoring tools like Oracle OEM to identify performance bottlenecks and implemented effective tuning strategies to optimize database efficiency.
                </li>
                <li>
                Enhanced Database Security: Contributed to implementing robust security measures like Oracle Redaction, TDE encryption, and custom scrubbing scripts to safeguard sensitive data.
                </li>
                <li>
                Automated Database Management: Developed automation scripts to streamline Oracle installation across 1200+ remote stores, significantly reducing manual effort and improving deployment consistency.
                </li>
                <li>
                Streamlined Development Environment Support: Supported the automation of 140 Oracle development environments, enabling efficient development workflows.
                </li>
                <li>
                VMware Deployment Experience: Possess experience deploying Oracle databases to VMware environments, demonstrating versatility in infrastructure management.
                </li>
                <li>
                Oracle Standby/Failover Administration: Managed standby databases and failover processes to ensure high availability and disaster recovery for critical systems.
                </li>
                <li>
                Experience with Oracle Exadata/RAC Systems: Familiarity with high-performance Oracle Exadata and RAC (Real Application Clusters) architectures.
                </li>
                <li>
                Database Schema Management: Managed and reviewed database schema objects like tables, indexes, and views, ensuring data integrity and efficient querying.
                </li>
                <li>
                Proven On-Call Support: Provided 24/7 support for production issues, proactively identifying and resolving problems to maintain optimal uptime.
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
                Application Troubleshooting & Problem-Solving: Analyzed application issues, researched root causes, and devised solutions to minimize disruptions to interfacing systems, exhibiting strong analytical and problem-solving skills.
                </li>
                <li>
                Application Maintenance & Bug Fixes: Efficiently addressed existing application problems and implemented effective fixes to ensure optimal functionality and user experience.s
                </li>
                <li>
                Collaborative Development Environment: Actively participated in code reviews, providing valuable feedback and fostering a culture of continuous improvement within the development team.
                </li>
                <li>
                Project Collaboration: Worked closely with development team members on new projects, contributing technical expertise and collaborative spirit.
                </li>
                <li>
                Proven On-Call Support for Kohls.com: Provided reliable 24/7 on-call support for critical applications powering Kohls.com, ensuring timely resolution of issues and maintaining high availability.
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
                Developed & Maintained ASP.NET/VB.NET Applications: Possess strong programming skills in ASP.NET and VB.NET, experience in developing and maintaining internal and external applications.
                </li>
                <li>
                Technical Support & Troubleshooting: Provided assistance with internal computer hardware issues, demonstrating broad technical knowledge.
                </li>
                <li>
                Project Management & Client Collaboration: Participated in the entire lifecycle of client projects, including planning, direction, and coordination for website document management, design, application development, and database management.
                </li>
                <li>
                Design & Content Creation: Contributed to the design and content creation for client websites, including graphics ,layouts, database design, and dynamic content, showcasing versatility in both technical and creative aspects.
                </li>
                <li>
                Benefits Administration Systems Expertise: Planned, coordinated, and implemented benefits enrollment systems, extranet sites, and employee self-service sites, demonstrating experience in benefits administration technology.
                </li>
                <li>
                IT Recommendation & Analysis: Developed and presented IT recommendations by evaluating current applications and analyzing needs to formulate strategic improvements.
                </li>
                <li>
                Project Management & Client Support: Managed tasks and projects for multiple clients simultaneously, ensuring adherence to deadlines and standards.
                </li>
                <li>
                Client Issue Resolution: Identified, evaluated, and resolved client issues within established timeframes and guidelines, exhibiting strong problem-solving and customer service skills.
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
                Software & Printer System Management: Maintained and developed software and thermal transfer printer systems, ensuring optimal functionality and user experience.
                </li>
                <li>
                Website Maintenance & Support: Managed and maintained website content and technical aspects, guaranteeing smooth operation and user access.
                </li>
                <li>
                Technical Support Specialist: Provided comprehensive technical support to users, troubleshooting software and printer issues for efficient resolution.
                </li>
                <li>
                Inventory Management & Proactive Maintenance: Ensured adequate inventory levels of crucial supplies and maintained backup units for repair, minimizing downtime and maximizing operational efficiency.
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
