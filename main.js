
 const users=[
	{
		first_name:'mike',
		location:'london',
	},
	{
		first_name:'tim',
		location:'US',
	},
	{
		first_name:'john',
		location:'Australia',
	},
	
 ];
 b=[];
users.map(function(a){
	b.push(a.first_name+" lives in "+a.location);
});
	console.table(b);
 