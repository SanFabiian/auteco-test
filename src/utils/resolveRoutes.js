const resolveRoutes = (route) => {
  const type = route.split("/")[0];
  let validRoute = route === "/" ? route : `/${type}/:type`;
  return validRoute;
};

export default resolveRoutes;
