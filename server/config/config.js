var env = process.env.NODE_ENV || 'devellpment';
                                //This environment variable dows not exist on
                                //normal machine, in Heroku it exists
                                //to add this variable in do that in package

console.log ('env ***********', env);

if (env === 'devellpment'){
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
}else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}
