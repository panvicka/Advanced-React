const Mutations = {
  async createItem(parent, args, ctx, info) {
    // you can get all the possible API function from prisma.graphql
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args,
        },
      },
      info
    );

    return item;
  },

  // createDog(parent, args, ctx, info) {
  //     global.dogs = global.dogs || [];
  //     // create a dog
  //     const newDog = { name: args.name};
  //     global.dogs.push(newDog);
  //     return newDog;
  // }
};

module.exports = Mutations;
