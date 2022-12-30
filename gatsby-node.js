exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/projects`,
    toPath: `/#projects`,
  });
};
