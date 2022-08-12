const projectsComponent = {
	template: 
		`<div class="row">
      <h3>A Nonsensical Abécédaire<br/>(Nanogenmo 2021)</h3>
      <br/>
      <div class="container">
        <img src="static/images/nanogenmo2021.png" alt="A few lines of A nonsensical abécédaire"/>
        <div class="message">
          <div class="www">
            <a href="https://github.com/MarkEEaton/nanogenmo2021/blob/main/novel.txt">
              <button type="button" class="btn btn-outline-dark">www</button>
            </a>
          </div>
          <div class="github">
            <a href="https://github.com/markeeaton/nanogenmo2021">
              <button type="button" class="btn btn-outline-dark">github</button>
            </a>
          </div>
        </div>
      </div>
      <br/>
      <div class="fleuron">&#10087;</div>
    </div>`
	props: [projects]
}

new Vue({
	el: '#app',
	data: {
		projects: Projects.projectslist
  },
	components {
		'projects-component': projectsComponent
	}
});


