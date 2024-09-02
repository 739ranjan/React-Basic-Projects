const Welcome = () => {
    return (
        <div className="container col-xxl-8 p-5 welcome-container">
            <div className="row flex-lg-row-reverse align-items-center g-5 p-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img src="https://dataconomy.com/wp-content/uploads/2022/10/NightCafe-AI-image-generator-7.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">This is Welcome Page</h1>
                <p className="lead">Here are my few basic project on react. This are my practice work while learning react. To view the projects you can select the project from sidebar.</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                </div>
              </div>
            </div>
        </div>
    )
}

export default Welcome