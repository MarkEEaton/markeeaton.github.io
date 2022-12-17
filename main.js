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
		projects1: Seed.projectsComponent1,
		projects2: Seed.projectsComponent2
  },
	components: {
		'projects-component': projectsComponent
	}
});


