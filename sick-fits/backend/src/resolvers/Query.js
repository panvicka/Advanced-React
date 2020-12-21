// this data could go from anywhere, csv file, external api... but usually
// it is fetching data from an database and we are going to do that as well

//in case the yoga query is the same as prima
const { forwardTo } = require("prisma-binding");

const Query = {

  //if yoga query === prisma query 
  items: forwardTo('db'),


  //this is for the case I want to do something with the data like filtering, authentification etc
  //   async items(parent, args, ctx, info) {
  //     const item = await ctx.db.query.items();
  //     return item;
  //   },
};

module.exports = Query;
