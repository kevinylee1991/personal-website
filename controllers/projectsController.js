app.controller('projectsController', ['$scope', function($scope) {
	$scope.projects = [
		{
			link: 'http://questions.gorillageek.net',
			name: 'Questions',
			description: 'A web game similar to Apples to Apples',
			tools: 'Built with: NodeJS, Express, SocketIO',
			pic: 'question.jpg'
		},
		{
			link: 'http://balls.gorillageek.net',
			name: 'Balls',
			description: 'A web game where you dodge black balls with other players in real-time',
			tools: 'Built with: NodeJS, Express, SocketIO, SVG',
			pic: 'spheres.png'
		},
		{
			link: 'http://surveys.gorillageek.net',
			name: 'Polls',
			description: 'A web app where users can create and vote in polls, updated in real-time',
			tools: 'Built with: NodeJS, Express, SocketIO',
			pic: 'poll.jpg'
		}
	];
}]);