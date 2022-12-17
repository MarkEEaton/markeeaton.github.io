const projectsComponent = {
	template: 
	`
	<div class="card section">
		<img class="card-img-top" v-bind:src="project.image" v-bind:alt="project.alt">
		<div class="card-body">
			<h5 class="card-title" v-html="project.title"></h5>
		</div>
	</div>
	`,
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


