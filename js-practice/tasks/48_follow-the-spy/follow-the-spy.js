export const followTheSpy = (routes) => {
  const trackedRoutes = [];

  routes.forEach(([currentFrom, currentTo]) => {
    const firstRoute = !routes.find(([, to]) => to === currentFrom);

    if (firstRoute) trackedRoutes.push(currentFrom, currentTo);

    routes.find(([from, to]) => from === trackedRoutes[trackedRoutes.length - 1] && trackedRoutes.push(to));
  });

  return trackedRoutes.join(', ');
};
