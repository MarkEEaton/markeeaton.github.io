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

const { createApp } = Vue;

const app = createApp({
	data() {
		return {
			projects1: [
				{
					id: 1,
					title: "Open Journal Matcher",
					subhead: "A tool to find relevant open access journals",
					image: "static/images/ojm2.png",
					alt: "A list of results from the Open Journal Matcher",
					url: "https://github.com/markeeaton/open-journal-matcher"
				},
                {
                        id: 2,
                        title: "Kingsborough Library Webpage",
                        subhead: "A homepage for the Kingsborough Library",
                        image: "static/images/kbcc.png",
                        alt: "A screenshot of the Kingsborough Library homepage",
                        url: "https://library.kbcc.cuny.edu"
                },
				{
					id: 3,
					title: "GH-Index",
					subhead: "Calculates h-index, but for open source contributions",
					image: "static/images/ghindex.png",
					alt: "Screenshot of the gh-index webpage",
					url: "https://github.com/markeeaton/gh-index"
				},
				{
					id: 4,
					title: "A Nonsensical Ab\u00E9c\u00E9daire",
					subhead: "A novel for NaNoGenMo 2021",
					image: "static/images/nanogenmo2021.png",
					alt: "A few lines of the novel A nonsensical abécédaire",
					url: "https://github.com/markeeaton/nanogenmo2021" 
				},
				{
					id: 5,
					title: "Index Visualizer",
					subhead: "Visually explore a back-of-the-book index",
					image: "static/images/IndexViz.png",
					alt: "A collapsible tree visualization of an index",
					url: "https://github.com/markeeaton/index-visualizer"
				},
				{
					id: 6,
					title: "Wandering Around America with Mark Twain",
					subhead: "A novel for NaNoGenMo 2020",
					image: "static/images/twain.png",
					alt: "A few lines of the novel Wandering Around Ameria with Mark Twain",
					url: "https://github.com/markeeaton/nanogenmo2020"
				}],
			projects2: [
				{
					id: 7,
					title: "Why Bot",
					subhead: "Asks the armchair philosopher's favorite question: Why?",
					image: "static/images/why3.png",
					alt: "A post by Why Bot",
					url: "https://botsin.space/@why/",
				},
				{
					id: 8,
					title: "mastodon.ocert.at",
					subhead: "I'm running a Mastodon server!",
					image: "static/images/moa.png",
					alt: "A screenshot from mastodon.ocert.at",
					url: "https://mastodon.ocert.at",
				},
				{
					id: 9,
					title: "Fictograph",
					subhead: "Plot the awesomeness of an author's work over time",
					image: "static/images/auster-fictograph.png",
					alt: "A chart of the popularity of Paul Auster's works",
					url: "https://github.com/markeeaton/fictograph"
				},
				{
					id: 10,
					title: "Tweets by Month",
					subhead: "Graph your number of tweets per month",
					image: "static/images/tbm.png",
					alt: "A bar chart of tweets by month",
					url: "https://github.com/markeeaton/Tweets-by-month"
				},
				{
					id: 11,
					title: "SeeCollections",
					subhead: "Visualize your collections with the Primo API",
					image: "static/images/PrimoViz.png",
					alt: "Bubble chart of book holdings",
					url: "https://github.com/markeeaton/Primo-Visualization"
				}
			]
		}
	},
	components: {
		'projects-component': projectsComponent
	}
});
app.mount('#app');

