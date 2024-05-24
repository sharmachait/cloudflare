export interface env {}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(request.body);
		console.log(request.headers);
		console.log(request);

		if (request.method == 'GET') {
			return Response.json({
				message: 'get request',
			});
		} else {
			return Response.json({
				message: 'not get',
			});
		}
	},
};
