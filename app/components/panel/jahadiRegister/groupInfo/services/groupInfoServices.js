groupInfoServices.$inject = ["$resource"];

function groupInfoServices($resource){

    return $resource(`${apiGetWay}/:type/:id/:routeParams`, {id: '@id',type: '@type', routeParams:'@routeParams'}, {

            query: { method: "GET", isArray: true },

            create: { method: "POST"},

            get: { method: "GET"},

            remove: { method: "DELETE"},

            update: { method: "PUT"}

        });

}

module.exports = ngModule => {

	ngModule.factory('panel.jahadiRegister.groupInfoServices', groupInfoServices);

};