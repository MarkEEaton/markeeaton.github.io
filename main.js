const projectsComponent = {
	template: 
	`<div class="row">
    		<h3 v-html="project.title"></h3>
    		<br/>
        <div class="container">
            <img v-bind:src="project.image" v-bind:alt="project.alt"/>
            <div class="message" v-bind:class="{ 'except' : !project.www }">
								<div v-if="project.www" class="www">
										<a v-bind:href="project.www">
							          <button type="button" class="btn btn-outline-dark">www</button>
										</a>
								</div>
                <div class="github">
                    <a v-bind:href="project.github">
                        <button type="button" class="btn btn-outline-dark">github</button>
                    </a>
                </div>
            </div>
        </div>
        <br/>
        <div class="fleuron">&#10087;</div>
	</div>`,
	props: ['project']
}

new Vue({
	el: '#app',
	data: {
		projects: Seed.projectsComponent
  },
	components: {
		'projects-component': projectsComponent
	}
});


