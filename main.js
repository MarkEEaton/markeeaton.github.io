const projectsComponent = {
	template: 
	`
	<a v-bind:href="project.url" class="section">
		<div class="card">
			<img class="shadow card-img-top" v-bind:src="project.image" v-bind:alt="project.alt" />
			<div class="card-body">
				<h5 class="card-title">{{ project.title }}</h5>
				<div class="subhead">{{ project.subhead }}</div>
			</div>
		</div>
	</a>
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


