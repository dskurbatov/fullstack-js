import http from 'http';

const server = http.createServer((req, res) => {
	res.write("Hello There!!!\n");
	setTimeout(()=>{
		res.write("I can Stream!!!\n");
		res.end();
	}, 3000);
});

server.listen(8080);
