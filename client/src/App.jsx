import './App.css'

function App() {
  return (
    <div className="container">
      <section className="hero">
        <h1>Rutuja Tandel</h1>
        <h2>DevOps Engineer | AWS | Docker | Jenkins</h2>
        <p>
          Building scalable cloud infrastructure and automating deployments
          through modern DevOps practices.
        </p>
      </section>

      <section className="cards">
        <div className="card">
          <h3>☁️ Cloud</h3>
          <p>AWS EC2, IAM, VPC, S3, CloudFormation</p>
        </div>

        <div className="card">
          <h3>🚀 DevOps</h3>
          <p>Docker, Jenkins, GitHub Actions, CI/CD</p>
        </div>

        <div className="card">
          <h3>💻 Programming</h3>
          <p>Python, JavaScript, Node.js</p>
        </div>
      </section>

      <section className="projects">
        <h2>Featured Project</h2>

        <div className="project-card">
          <h3>CI/CD Pipeline Automation</h3>

          <p>
            Automated full-stack application deployment using GitHub,
            Jenkins, Docker, Docker Hub and AWS EC2.
          </p>

          <div className="pipeline">
            <span>GitHub</span>
            <span>→</span>
            <span>Jenkins</span>
            <span>→</span>
            <span>Docker</span>
            <span>→</span>
            <span>AWS EC2</span>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Let's Connect</h2>
        <p>Open to DevOps and Cloud opportunities.</p>
      </section>
    </div>
  )
}

export default App
